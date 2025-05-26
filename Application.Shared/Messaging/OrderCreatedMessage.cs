namespace Application.Shared.Messaging;

public class OrderCreatedMessage : BaseMessage
{
    public Guid OrderId { get; set; }
    public string CustomerName { get; set; } = string.Empty;
    public decimal TotalAmount { get; set; }
}
