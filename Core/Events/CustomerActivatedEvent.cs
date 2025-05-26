using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class CustomerActivatedEvent : BaseEvent
    {
        public Customer Customer { get; }
        public CustomerActivatedEvent(Customer customer) => Customer = customer;
    }
}