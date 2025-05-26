namespace MyDotNetSolution.Core.Events.Handlers
{
    public abstract class DomainEventHandlerBase<TEvent>
        where TEvent : BaseEvent
    {
        public abstract void Handle(TEvent domainEvent);
    }
}