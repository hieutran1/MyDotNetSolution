namespace Application.Shared.Exceptions;
public class DataValidationException : Exception
{
    public List<string> ValidationMessages { get; set; } = [];
}
