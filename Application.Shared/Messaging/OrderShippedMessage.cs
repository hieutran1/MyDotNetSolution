namespace Application.Shared.Messaging
{
    public class OrderShippedMessage : BaseMessage
    {
        public Guid OrderId { get; set; }
        public DateTime ShippedAt { get; set; }
        public string? TrackingNumber { get; set; }
    }
}