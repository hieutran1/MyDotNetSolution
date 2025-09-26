using MyDotNetSolution.Core.Shared;

namespace Application.Shared.DTOs;

public class LanguageUpdateDto : LanguageAddDto, IEntity
{
    public Guid Id { get; set; }
}
