namespace Application.Shared.Messaging;

public class OrderDeletedMessage : BaseMessage
{
    public Guid OrderId { get; set; }
}
