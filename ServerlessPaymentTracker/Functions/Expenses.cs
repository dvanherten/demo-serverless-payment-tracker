using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using JetBrains.Annotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.WindowsAzure.Storage.Table;
using Newtonsoft.Json;
using ServerlessPaymentTracker.Models;

namespace ServerlessPaymentTracker.Functions
{
    public static class Expenses
    {
        [PublicAPI]
        [FunctionName("GetExpenses")]
        public static async Task<IActionResult> Get(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "expense")]HttpRequest req,
            [Table("expenses")] CloudTable expenseTable,
            ILogger log)
        {
            log.LogInformation("Getting expense items");
            var query = new TableQuery<ExpenseTableEntity>();
            var segment = await expenseTable.ExecuteQuerySegmentedAsync(query, null);
            return new OkObjectResult(segment.Results.Select(ExpenseMappings.ToExpense));
        }

        [FunctionName("Table_GetExpenseById")]
        public static IActionResult GetExpenseById(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "expense/{id}")]HttpRequest req,
            [Table("expenses", "EXPENSE", "{id}")] ExpenseTableEntity expense,
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

        public class ExpenseCreateModel
        {
            public string Name { get; set; }
        }

        [PublicAPI]
        [FunctionName("CreateExpense")]
        public static async Task<IActionResult> CreateExpense(
            [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "expense")]HttpRequest req,
            [Table("expenses")] IAsyncCollector<ExpenseTableEntity> expenseTable,
            ILogger log)
        {
            log.LogInformation("Creating a new expense list item");
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
            var input = JsonConvert.DeserializeObject<ExpenseCreateModel>(requestBody);

            var expense = new Expense() { Name = input.Name };
            await expenseTable.AddAsync(expense.ToTableEntity());
            return new OkObjectResult(expense);
        }
    }
}
