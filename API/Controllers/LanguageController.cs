using Application.Shared.DTOs;
using Application.Shared.Exceptions;
using Application.Shared.Interfaces;
using Application.Shared.Logger;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyDotNetSolution.API.Controllers;

[Route("api/[controller]")]
[ApiController]
[Authorize]
public class LanguageController : ControllerBase
{
    protected readonly ILogService _logService;
    private readonly ILanguageService _languageService;

    public LanguageController(ILogService logService, ILanguageService languageService)
    {
        _logService = logService;
        _languageService = languageService;
    }

    [HttpGet("languages", Name = "GetLanguageList")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(IEnumerable<LanguageDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> GetLanguageListAsync()
    {
        _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageListAsync), "Endpoint call started.");

        try
        {
            IEnumerable<LanguageDto> languageItems = await _languageService.GetAllAsync();

            _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageListAsync), "Endpoint call completed successfully.");
            return Ok(languageItems);
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageListAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("languages/{id}", Name = "GetLanguage")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(LanguageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> GetLanguageAsync(Guid id)
    {
        _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageAsync), "Endpoint call started.");

        try
        {
            var language = await _languageService.GetByIdAsync(id);

            _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageAsync), "Endpoint call completed successfully.");
            return Ok(language);
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(GetLanguageAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("languages/search", Name = "SearchLanguages")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(LanguageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> SearchLanguagesAsync([FromQuery] string name, [FromQuery] string isoCode)
    {
        _logService.LogDebug(nameof(LanguageController), nameof(SearchLanguagesAsync), "Endpoint call started.");

        try
        {
            var language = await _languageService.SearchAsync(name, isoCode);

            _logService.LogDebug(nameof(LanguageController), nameof(SearchLanguagesAsync), "Endpoint call completed successfully.");
            return Ok(language);
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(SearchLanguagesAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost("languages", Name = "AddLanguage")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(LanguageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> AddLanguageAsync([FromBody] LanguageAddDto language)
    {
        _logService.LogDebug(nameof(LanguageController), nameof(AddLanguageAsync), "Endpoint call started.");

        try
        {
            await _languageService.AddAsync(language);

            _logService.LogDebug(nameof(LanguageController), nameof(AddLanguageAsync), "Endpoint call completed successfully.");
            return Ok(language);
        }
        catch (DataValidationException ex)
        {
            return new JsonResult(ex.ValidationMessages)
            {
                StatusCode = StatusCodes.Status400BadRequest
            };
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(AddLanguageAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPut("languages", Name = "UpdateLanguage")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(LanguageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(void), StatusCodes.Status400BadRequest)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> UpdateLanguageAsync([FromBody] LanguageUpdateDto language)
    {
        _logService.LogDebug(nameof(LanguageController), nameof(UpdateLanguageAsync), "Endpoint call started.");

        try
        {
            await _languageService.UpdateAsync(language);

            _logService.LogDebug(nameof(LanguageController), nameof(UpdateLanguageAsync), "Endpoint call completed successfully.");
            return Ok(language);
        }
        catch (DataNotFoundException)
        {
            _logService.LogDebug(nameof(LanguageController), nameof(UpdateLanguageAsync), "Endpoint call completed with 404.");
            return StatusCode(StatusCodes.Status404NotFound);
        }
        catch (DataValidationException ex)
        {
            return new JsonResult(ex.ValidationMessages)
            {
                StatusCode = StatusCodes.Status400BadRequest
            };
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(UpdateLanguageAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("languages/{id}", Name = "DeleteLanguage")]
    [Produces("application/json")]
    [ProducesResponseType(typeof(LanguageDto), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(void), StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(typeof(void), StatusCodes.Status404NotFound)]
    [ProducesResponseType(typeof(void), StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult> DeleteLanguageAsync(Guid id)
    {
        _logService.LogDebug(nameof(LanguageController), nameof(DeleteLanguageAsync), "Endpoint call started.");

        try
        {
            await _languageService.DeleteAsync(id);

            _logService.LogDebug(nameof(LanguageController), nameof(DeleteLanguageAsync), "Endpoint call completed successfully.");
            return Ok();
        }
        catch (DataNotFoundException)
        {
            _logService.LogDebug(nameof(LanguageController), nameof(DeleteLanguageAsync), "Endpoint call completed with 404.");
            return StatusCode(StatusCodes.Status404NotFound);
        }
        catch
        {
            _logService.LogDebug(nameof(LanguageController), nameof(DeleteLanguageAsync), "Endpoint call failed.");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
