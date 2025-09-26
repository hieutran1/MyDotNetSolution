namespace Application.Shared.Logger;

public class LogEntryException
{
    public required string Message { get; set; }

    public required string? StackTrace { get; set; }

    public string? InnerExceptionMessage { get; set; } = null!;
}