using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class OrderShippedEvent : BaseEvent
    {
        public Order Order { get; }
        public OrderShippedEvent(Order order) => Order = order;
    }
}