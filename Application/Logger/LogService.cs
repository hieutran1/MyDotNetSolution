using Application.Shared.Logger;
using Microsoft.Extensions.Logging;
using System;
using System.Text.Json;

namespace Application.Logger;
public class LogService : ILogService
{
    private readonly ILogger<LogService> _logger;

    public LogService(ILogger<LogService> logger)
    {
        _logger = logger;
    }

    public void LogDebug(string className, string functionName, string message) => _logger.LogDebug(className, functionName, message);

    public void LogInformation(string className, string functionName, string message) => _logger.LogInformation(className, functionName, message);

    public void LogError(string className, string functionName, string message, Exception exception)
    {
        _logger.LogError(message: FormatError(className, functionName, message, exception));
    }

    private string FormatError(string className, string functionName, string message, Exception exception)
    {
        var logEntry = new LogEntry()
        {
            ClassName = className,
            FunctionName = functionName,
            Message = message
        };

        if (exception != null)
        {
            logEntry.Exception = new LogEntryException()
            {
                Message = exception.Message,
                StackTrace = exception.StackTrace,
                InnerExceptionMessage = exception.InnerException?.Message
            };
        }

        return JsonSerializer.Serialize(logEntry);
    }
}
