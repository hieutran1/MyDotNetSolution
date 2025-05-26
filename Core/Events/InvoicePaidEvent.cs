using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Events
{
    public class InvoicePaidEvent : BaseEvent
    {
        public Invoice Invoice { get; }

        public InvoicePaidEvent(Invoice invoice)
        {
            Invoice = invoice;
        }
    }
}