using System.IO;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;
using ServerlessPaymentTracker.Models;

namespace ServerlessPaymentTracker.Functions
{
    public static class Expenses
    {
        public const string TemporaryPartitionKey = "Expense";// Probably http context User Id after Auth
        public const string BaseRoute = "expense";
        public const string StorageConnectionName = "AzureWebJobsStorage";

        [PublicAPI]
        [FunctionName("GetExpenses")]
        public static async Task<IActionResult> GetExpenses(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = BaseRoute)]
            HttpRequest req,
            [Table("expenses", Connection = StorageConnectionName)]
            CloudTable expenseTable,
            ILogger log)
        {
            log.LogInformation("Getting expense items");
            var query = new TableQuery<ExpenseTableEntity>().Where(
                TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, TemporaryPartitionKey)
            );
            var segment = await expenseTable.ExecuteQuerySegmentedAsync(query, null);
            return new OkObjectResult(segment.Results.Select(ExpenseMappings.ToExpense));
        }

        [PublicAPI]
        [FunctionName("GetExpenseById")]
        public static IActionResult GetExpenseById(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = BaseRoute + "/{id}")]
            HttpRequest req,
            [Table("expenses", TemporaryPartitionKey, "{id}", Connection = StorageConnectionName)]
            ExpenseTableEntity expense,
            ILogger log, string id)
        {
            log.LogInformation("Getting expense item by id");
            if (expense == null)
            {
                log.LogInformation($"Expense {id} not found");
                return new NotFoundResult();
            }

            return new OkObjectResult(expense.ToExpense());
        }

        [PublicAPI]
        [FunctionName("CreateExpense")]
        public static async Task<IActionResult> CreateExpense(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = BaseRoute)]
            HttpRequest req,
            [Table("expenses", Connection = StorageConnectionName)]
            IAsyncCollector<ExpenseTableEntity> expenseTable,
            ILogger log)
        {
            log.LogInformation("Creating a new expense list item");
            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<ExpenseUpdateModel>(requestBody);

            var expense = new Expense {Name = input.Name};
            await expenseTable.AddAsync(expense.ToTableEntity(TemporaryPartitionKey));
            return new OkObjectResult(expense);
        }

        [PublicAPI]
        [FunctionName("UpdateExpense")]
        public static async Task<IActionResult> UpdateExpense(
            [HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = BaseRoute + "/{id}")]
            HttpRequest req,
            [Table("expenses", Connection = StorageConnectionName)]
            CloudTable expenseTable,
            ILogger log, string id)
        {
            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var updated = JsonConvert.DeserializeObject<ExpenseUpdateModel>(requestBody);
            var findOperation = TableOperation.Retrieve<ExpenseTableEntity>("Expense", id);
            var findResult = await expenseTable.ExecuteAsync(findOperation);
            if (findResult.Result == null) return new NotFoundResult();
            var existingRow = (ExpenseTableEntity) findResult.Result;

            if (!string.IsNullOrEmpty(updated.Name)) existingRow.Name = updated.Name;

            var replaceOperation = TableOperation.Replace(existingRow);
            await expenseTable.ExecuteAsync(replaceOperation);

            return new OkObjectResult(existingRow.ToExpense());
        }

        [PublicAPI]
        [FunctionName("DeleteExpense")]
        public static async Task<IActionResult> DeleteExpense(
            [HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = BaseRoute + "/{id}")]
            HttpRequest req,
            [Table("expenses", Connection = StorageConnectionName)]
            CloudTable expenseTable,
            ILogger log, string id)
        {
            var deleteOperation = TableOperation.Delete(new TableEntity
                {PartitionKey = TemporaryPartitionKey, RowKey = id, ETag = "*"});
            try
            {
                await expenseTable.ExecuteAsync(deleteOperation);
            }
            catch (StorageException e) when (e.RequestInformation.HttpStatusCode == 404)
            {
                return new NotFoundResult();
            }

            return new OkResult();
        }
    }
}