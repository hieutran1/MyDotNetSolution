namespace Application.Shared.Messaging;

public class CustomerCreatedMessage : BaseMessage
{
    public string Name { get; set; } = null!;
    public string? Email { get; set; }
    public Guid CustomerId { get; set; }
}