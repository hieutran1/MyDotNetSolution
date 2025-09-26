using Application.Shared.DTOs;
using Application.Shared.Exceptions;
using Application.Shared.Interfaces;
using Application.Shared.Logger;
using Infrastructure.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using MyDotNetSolution.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Services;
public class LanguageService : ILanguageService
{
    private readonly ILogService _logger;
    private readonly AppDbContext _dbContext;

    public LanguageService(ILogService logger, AppDbContext dbContext)
    {
        _logger = logger;
        _dbContext = dbContext;
    }

    public async Task<IEnumerable<LanguageDto>> GetAllAsync()
    {
        IEnumerable<Language>? languages = null;

        try
        {
            languages = await _dbContext.Languages.ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(GetAllAsync), "Error retrieving languages from database.", ex);
            throw;
        }

        return languages.Select(MapToLanguageDto);
    }

    public async Task<LanguageDto> GetByIdAsync(Guid id)
    {
        try
        {
            var language = await _dbContext.Languages.FirstOrDefaultAsync(l => l.Id == id);
            return MapToLanguageDto(language);
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(GetLanguageDataAsync), $"Error retrieving language {id} from database.", ex);
            throw;
        }
    }

    public async Task<LanguageDto> SearchAsync(string name, string isoCode)
    {
        Language? language;

        try
        {
            language = await _dbContext.Languages.Where(ls => ls.Name.Contains(name) && ls.IsoCode == isoCode).FirstOrDefaultAsync();

            return MapToLanguageDto(language);
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(SearchAsync), $"Error retrieving language for name '{name}' and isoCode '{isoCode}' from database.", ex);
            throw;
        }
    }

    public async Task AddAsync(LanguageAddDto languageAddDto)
    {
        var validationMessages = Validate(languageAddDto);
        if (validationMessages.Count != 0)
        {
            throw new DataValidationException()
            {
                ValidationMessages = validationMessages
            };
        }

        try
        {
            var language = MapToLanguageEntity(languageAddDto);

            await _dbContext.Languages.AddAsync(language);
            await _dbContext.SaveChangesAsync();
        }
        catch (DbUpdateException ex)
        {
            var sqlEx = (ex.InnerException as SqlException)!;
            if (sqlEx.Errors[0].Number == 2627 || sqlEx.Errors[0].Number == 2601)
            {
                throw new DataValidationException()
                {
                    ValidationMessages = ["Duplicate record"]
                };
            }
            else
            {
                throw;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(AddAsync), "Error adding language to database.", ex);
            throw;
        }
    }

    public async Task UpdateAsync(LanguageUpdateDto languageUpdateDto)
    {
        var validationMessages = Validate(languageUpdateDto);
        if (validationMessages.Count != 0)
        {
            throw new DataValidationException()
            {
                ValidationMessages = validationMessages
            };
        }

        try
        {
            var languageToUpdate = await GetLanguageDataAsync(languageUpdateDto.Id);
            MapToLanguageEntity(languageToUpdate, languageUpdateDto);
            await _dbContext.SaveChangesAsync();
        }
        catch (DataNotFoundException)
        {
            throw;
        }
        catch (DbUpdateException ex)
        {
            var sqlEx = (ex.InnerException as SqlException)!;
            if (sqlEx.Errors[0].Number == 2627 || sqlEx.Errors[0].Number == 2601)
            {
                throw new DataValidationException()
                {
                    ValidationMessages = ["Duplicate record"]
                };
            }
            else
            {
                throw;
            }
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(UpdateAsync), $"Error updating language {languageUpdateDto.Id} in database.", ex);
            throw;
        }
    }

    public async Task DeleteAsync(Guid id)
    {
        try
        {
            var languageToDelete = await GetLanguageDataAsync(id);

            _dbContext.Remove(languageToDelete);
            await _dbContext.SaveChangesAsync();
        }
        catch (DataNotFoundException)
        {
            throw;
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(DeleteAsync), $"Error deleting language '{id}' from database.", ex);
            throw;
        }
    }

    #region private methods

    /// <summary>
    /// Get Language by Id
    /// </summary>
    /// <param name="id">Language Id</param>
    /// <returns>A language or throw exception</returns>
    /// <exception cref="DataNotFoundException">Data not found exception</exception>
    private async Task<Language> GetLanguageDataAsync(Guid id)
    {
        Language? language;

        try
        {
            language = await _dbContext.Languages.FirstOrDefaultAsync(l => l.Id == id);
        }
        catch (Exception ex)
        {
            _logger.LogError(nameof(LanguageService), nameof(GetLanguageDataAsync), $"Error retrieving language {id} from database.", ex);
            throw;
        }

        if (language == null)
        {
            throw new DataNotFoundException();
        }

        return language;
    }

    /// <summary>
    /// Validate language inputs
    /// </summary>
    /// <param name="languageDto">Language model</param>
    /// <returns>The error messages</returns>
    private static List<string> Validate(LanguageAddDto? languageDto)
    {
        List<string> messages = [];

        if (languageDto == null)
        {
            messages.Add($"{nameof(Language)} is required");
        }

        if (string.IsNullOrEmpty(languageDto!.IsoCode))
        {
            messages.Add($"{nameof(Language.IsoCode)} is required");
        }

        if (string.IsNullOrEmpty(languageDto!.Name))
        {
            messages.Add($"{nameof(Language.Name)} is required");
        }

        return messages;
    }

    private static List<string> Validate(LanguageUpdateDto? languageUpdateDto)
    {
        List<string> messages = [];
        // Validate for updating model

        // Validate for adding model
        messages.AddRange(Validate(languageUpdateDto as LanguageAddDto));

        return messages;
    }

    private static Language MapToLanguageEntity(LanguageAddDto language) => new()
    {
        Name = language.Name,
        IsoCode = language.IsoCode,
    };

    private static void MapToLanguageEntity(Language language, LanguageUpdateDto languageUpdateDto)
    {
        language.Id = languageUpdateDto.Id;
        language.Name = languageUpdateDto.Name;
        language.IsoCode = languageUpdateDto.IsoCode;
    }

    private static LanguageDto MapToLanguageDto(Language? language) => language != null ? new()
    {
        Id = language.Id,
        Name = language.Name,
        IsoCode = language.IsoCode,
    } : new();

    #endregion
}
