using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class OrderDeliveredEvent : BaseEvent
    {
        public Order Order { get; }
        public OrderDeliveredEvent(Order order) => Order = order;
    }
}