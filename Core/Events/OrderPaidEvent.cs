using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class OrderPaidEvent : BaseEvent
    {
        public Order Order { get; }
        public OrderPaidEvent(Order order) => Order = order;
    }
}