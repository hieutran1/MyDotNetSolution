namespace Application.Shared.Messaging
{
    public class OrderPaidMessage : BaseMessage
    {
        public Guid OrderId { get; set; }
        public DateTime PaidAt { get; set; }
        public string? PaymentMethod { get; set; }
    }
}