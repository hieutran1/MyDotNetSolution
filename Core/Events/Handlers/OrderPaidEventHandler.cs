using System;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Core.Events.Handlers
{
    public class OrderPaidEventHandler : DomainEventHandlerBase<OrderPaidEvent>
    {
        private readonly IEmailService _emailService;

        public OrderPaidEventHandler(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public override void Handle(OrderPaidEvent domainEvent)
        {
            // Send a confirmation email to the customer
            _emailService.SendOrderPaidConfirmation(domainEvent.Order.CustomerId, domainEvent.Order.Id);
        }
    }

    public interface IEmailService
    {
        void SendOrderPaidConfirmation(Guid customerId, Guid orderId);
    }
}