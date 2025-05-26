namespace Application.Shared.Messaging;

public class CustomerDeletedMessage : BaseMessage
{
    public Guid CustomerId { get; set; }
}