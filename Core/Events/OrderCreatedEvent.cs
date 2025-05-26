using System;
using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class OrderCreatedEvent : BaseEvent
    {
        public Order Order { get; }

        public OrderCreatedEvent(Order order)
        {
            Order = order;
        }
    }
}
