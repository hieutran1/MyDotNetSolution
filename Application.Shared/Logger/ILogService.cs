namespace Application.Shared.Logger;
public interface ILogService
{
    void LogDebug(string className, string functionName, string message);

    void LogInformation(string className, string functionName, string message);

    void LogError(string className, string functionName, string message, Exception exception);
}
