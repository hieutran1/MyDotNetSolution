using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class CustomerUpdatedEvent : BaseEvent
    {
        public Customer Customer { get; }
        public CustomerUpdatedEvent(Customer customer) => Customer = customer;
    }
}