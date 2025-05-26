using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class CustomerCreatedEvent : BaseEvent
    {
        public Customer Customer { get; }

        public CustomerCreatedEvent(Customer customer)
        {
            Customer = customer;
        }
    }
}