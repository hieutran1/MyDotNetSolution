using System;

namespace MyDotNetSolution.Core.Events
{
    /// <summary>
    /// Abstract base class for all domain events.
    /// </summary>
    public abstract class BaseEvent
    {
        public Guid EventId { get; set; } = Guid.NewGuid();
        public DateTime OccurredAt { get; set; } = DateTime.UtcNow;
    }
}