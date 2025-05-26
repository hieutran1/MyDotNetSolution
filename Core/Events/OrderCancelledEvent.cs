using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class OrderCancelledEvent : BaseEvent
    {
        public Order Order { get; }
        public string? Reason { get; }
        public OrderCancelledEvent(Order order, string? reason)
        {
            Order = order;
            Reason = reason;
        }
    }
}