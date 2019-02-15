using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.WindowsAzure.Storage.Table;
using ServerlessPaymentTracker.Functions;

namespace ServerlessPaymentTracker.Models
{
    public class ExpenseTableEntity : TableEntity
    {
        public string Name { get; set; }
    }

    public static class ExpenseMappings
    {
        public static ExpenseTableEntity ToTableEntity(this Expense expense, string partitionKey)
        {
            return new ExpenseTableEntity
            {
                PartitionKey = partitionKey, 
                RowKey = expense.Id,
                Name = expense.Name
            };
        }

        public static Expense ToExpense(this ExpenseTableEntity expense)
        {
            return new Expense
            {
                Id = expense.RowKey,
                Name = expense.Name
            };
        }
    }
}
