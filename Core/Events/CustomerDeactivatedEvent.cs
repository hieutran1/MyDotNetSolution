using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class CustomerDeactivatedEvent : BaseEvent
    {
        public Customer Customer { get; }
        public string? Reason { get; }
        public CustomerDeactivatedEvent(Customer customer, string? reason)
        {
            Customer = customer;
            Reason = reason;
        }
    }
}