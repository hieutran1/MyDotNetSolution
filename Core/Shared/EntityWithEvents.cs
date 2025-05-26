using System;
using System.Collections.Generic;
using MyDotNetSolution.Core.Events;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Entities
{
    public abstract class EntityWithEvents : IEntity
    {
        public Guid Id { get; protected set; }
        private readonly List<BaseEvent> _domainEvents = new();
        public IReadOnlyCollection<BaseEvent> DomainEvents => _domainEvents.AsReadOnly();

        public void AddDomainEvent(BaseEvent domainEvent) => _domainEvents.Add(domainEvent);
        public void RemoveDomainEvent(BaseEvent domainEvent) => _domainEvents.Remove(domainEvent);
        public void ClearDomainEvents() => _domainEvents.Clear();
    }
}