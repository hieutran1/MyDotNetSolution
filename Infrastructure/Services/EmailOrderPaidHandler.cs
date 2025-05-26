using System;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Infrastructure.Services
{
    public class EmailOrderPaidHandler
    {
        public void Handle(OrderPaidEvent domainEvent)
        {
            // Example: Send email (pseudo-code)
            Console.WriteLine($"[Email] Order {domainEvent.Order.Id} has been paid. Sending receipt to customer...");
            // EmailService.SendReceipt(domainEvent.Order);
        }
    }
}