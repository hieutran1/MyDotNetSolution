namespace Application.Shared.Messaging;

public abstract class BaseMessage
{
    public Guid MessageId { get; set; } = Guid.NewGuid();
    public DateTime SentAt { get; set; } = DateTime.UtcNow;
    public string? CorrelationId { get; set; }
    public string? Source { get; set; }
    public string? Type => GetType().Name;
}