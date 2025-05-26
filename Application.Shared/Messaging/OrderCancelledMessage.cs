namespace Application.Shared.Messaging
{
    public class OrderCancelledMessage : BaseMessage
    {
        public Guid OrderId { get; set; }
        public string? Reason { get; set; }
    }
}