using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class InvoiceCancelledEvent : BaseEvent
    {
        public Invoice Invoice { get; }
        public string? Reason { get; }

        public InvoiceCancelledEvent(Invoice invoice, string? reason)
        {
            Invoice = invoice;
            Reason = reason;
        }
    }
}