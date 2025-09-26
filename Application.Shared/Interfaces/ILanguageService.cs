using Application.Shared.DTOs;

namespace Application.Shared.Interfaces;
public interface ILanguageService
{
    Task<IEnumerable<LanguageDto>> GetAllAsync();

    Task<LanguageDto> GetByIdAsync(Guid id);

    Task<LanguageDto> SearchAsync(string name, string isoCode);

    Task AddAsync(LanguageAddDto language);

    Task UpdateAsync(LanguageUpdateDto language);

    Task DeleteAsync(Guid id);
}
