
namespace Application.Shared.Messaging;

public class CustomerUpdatedMessage : BaseMessage
{
    public Guid CustomerId { get; set; }
    public string Name { get; set; } = null!;
    public string? Email { get; set; }
}