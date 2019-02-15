using System;
using System.Collections.Generic;
using System.Text;

namespace ServerlessPaymentTracker.Models
{
    public class Expense
    {
        public string Id { get; set; } = Guid.NewGuid().ToString("n");
        public string Name { get; set; }
    }

    public class ExpenseUpdateModel
    {
        public string Name { get; set; }
    }
}
