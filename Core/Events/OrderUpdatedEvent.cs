using System;

namespace MyDotNetSolution.Core.Events;

public class OrderUpdatedEvent : BaseEvent
{
    public Guid OrderId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public decimal TotalAmount { get; set; }
}
