namespace Application.Shared.Messaging
{
    public class OrderDeliveredMessage : BaseMessage
    {
        public Guid OrderId { get; set; }
        public DateTime DeliveredAt { get; set; }
    }
}