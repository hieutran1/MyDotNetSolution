using System;
using System.Collections.Generic;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Core.Shared
{
    /// <summary>
    /// Abstract base class for aggregate roots, supporting domain events.
    /// </summary>
    public abstract class AggregateRootBase : EntityBase, IAggregateRoot
    {
        private readonly List<BaseEvent> _domainEvents = new();
        public IReadOnlyCollection<BaseEvent> DomainEvents => _domainEvents.AsReadOnly();

        /// <summary>
        /// Adds a domain event to the aggregate.
        /// </summary>
        protected void AddDomainEvent(BaseEvent domainEvent) => _domainEvents.Add(domainEvent);

        /// <summary>
        /// Removes a domain event from the aggregate.
        /// </summary>
        protected void RemoveDomainEvent(BaseEvent domainEvent) => _domainEvents.Remove(domainEvent);

        /// <summary>
        /// Clears all domain events from the aggregate.
        /// </summary>
        public void ClearDomainEvents() => _domainEvents.Clear();
    }
}