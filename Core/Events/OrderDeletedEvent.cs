using System;

namespace MyDotNetSolution.Core.Events;

public class OrderDeletedEvent : BaseEvent
{
    public Guid OrderId { get; set; }
}