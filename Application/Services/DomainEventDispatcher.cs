using System;
using System.Collections.Generic;
using MyDotNetSolution.Core.Events;
using MyDotNetSolution.Core.Events.Handlers;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Application.Services
{
    public class DomainEventDispatcher
    {
        private readonly OrderEventHandlers _orderEventHandlers;

        public DomainEventDispatcher()
        {
            _orderEventHandlers = new OrderEventHandlers();
        }

        public DomainEventDispatcher(OrderEventHandlers orderEventHandlers)
        {
            _orderEventHandlers = orderEventHandlers;
        }

        public void DispatchEvents(EntityWithEvents entity)
        {
            foreach (var domainEvent in entity.DomainEvents)
            {
                switch (domainEvent)
                {
                    case OrderPaidEvent paid:
                        _orderEventHandlers.Handle(paid);
                        break;
                    case OrderDeliveredEvent delivered:
                        _orderEventHandlers.Handle(delivered);
                        break;
                    case OrderCancelledEvent cancelled:
                        _orderEventHandlers.Handle(cancelled);
                        break;
                    // Add more cases as needed
                }
            }
            entity.ClearDomainEvents();
        }
    }
}