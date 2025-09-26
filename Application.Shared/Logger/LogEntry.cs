namespace Application.Shared.Logger;
public class LogEntry
{
    public required string ClassName { get; set; }

    public required string FunctionName { get; set; }

    public required string Message { get; set; }

    public LogEntryException? Exception { get; set; }
}
