using Application.Shared.DTOs;
using Application.Shared.Interfaces;
using Application.Shared.Messaging;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Application.Services;

public class CustomerService : ICustomerService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly ICacheService _cache;
    private readonly IMessagingService _messagingService;
    private const string CachePrefix = "customer_";
    private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(10);

    public CustomerService(IUnitOfWork unitOfWork, ICacheService cache, IMessagingService messagingService)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        _cache = cache ?? throw new ArgumentNullException(nameof(cache));
        _messagingService = messagingService ?? throw new ArgumentNullException(nameof(messagingService));
    }

    public async Task<CustomerDto?> GetByIdAsync(Guid id)
    {
        var cacheKey = $"{CachePrefix}{id}";
        var cached = await _cache.GetAsync<CustomerDto>(cacheKey);
        if (cached != null) return cached;

        var customer = await _unitOfWork.CustomerRepository.GetByIdAsync(id);
        if (customer == null) return null;

        var dto = new CustomerDto
        {
            Id = customer.Id,
            Name = customer.Name,
            Email = customer.Email
        };

        await _cache.SetAsync(cacheKey, dto, CacheDuration);
        return dto;
    }

    public async Task<IEnumerable<CustomerDto>> GetAllAsync()
    {
        var customers = await _unitOfWork.CustomerRepository.GetAllAsync();
        return customers.Select(c => new CustomerDto
        {
            Id = c.Id,
            Name = c.Name,
            Email = c.Email
        }).ToList();
    }

    public async Task<CustomerDto> CreateAsync(CustomerDto dto)
    {
        if (dto == null) throw new ArgumentNullException(nameof(dto));

        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var customer = new Customer
            {
                Id = dto.Id,
                Name = dto.Name,
                Email = dto.Email
            };

            await _unitOfWork.CustomerRepository.AddAsync(customer);
            await _unitOfWork.CommitTransactionAsync();

            var cacheKey = $"{CachePrefix}{customer.Id}";
            await _cache.SetAsync(cacheKey, dto, CacheDuration);

            var headers = new Dictionary<string, object> { { "CustomerId", customer.Id }, { "Action", "Create" } };
            await _messagingService.PublishAsync("CustomerQueue", new CustomerCreatedMessage
            {
                CustomerId = customer.Id,
                Name = customer.Name,
                Email = customer.Email
            }, headers);

            return dto;
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task UpdateAsync(CustomerDto dto)
    {
        if (dto == null) throw new ArgumentNullException(nameof(dto));

        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var customer = await _unitOfWork.CustomerRepository.GetByIdAsync(dto.Id);
            if (customer == null) throw new InvalidOperationException("Customer not found.");

            customer.Name = dto.Name;
            customer.Email = dto.Email;

            await _unitOfWork.CustomerRepository.UpdateAsync(customer);
            await _unitOfWork.CommitTransactionAsync();

            var cacheKey = $"{CachePrefix}{customer.Id}";
            await _cache.SetAsync(cacheKey, dto, CacheDuration);

            var headers = new Dictionary<string, object> { { "CustomerId", customer.Id }, { "Action", "Update" } };
            await _messagingService.PublishAsync("CustomerQueue", new CustomerUpdatedMessage
            {
                CustomerId = customer.Id,
                Name = customer.Name,
                Email = customer.Email
            }, headers);
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task DeleteAsync(Guid id)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            await _unitOfWork.CustomerRepository.DeleteAsync(id);
            await _unitOfWork.CommitTransactionAsync();

            var cacheKey = $"{CachePrefix}{id}";
            await _cache.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "CustomerId", id }, { "Action", "Delete" } };
            await _messagingService.PublishAsync("CustomerQueue", new CustomerDeletedMessage
            {
                CustomerId = id
            }, headers);
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task<IEnumerable<CustomerDto>> SearchByNameAsync(string name)
    {
        var customers = await _unitOfWork.CustomerRepository.SearchByNameAsync(name);
        return customers.Select(c => new CustomerDto
        {
            Id = c.Id,
            Name = c.Name,
            Email = c.Email
        }).ToList();
    }

    public async Task<CustomerDto?> GetByEmailAsync(string email)
    {
        var customer = await _unitOfWork.CustomerRepository.GetByEmailAsync(email);
        if (customer == null) return null;
        return new CustomerDto
        {
            Id = customer.Id,
            Name = customer.Name,
            Email = customer.Email
        };
    }

    public async Task<bool> ExistsAsync(Guid id)
    {
        return await _unitOfWork.CustomerRepository.ExistsAsync(id);
    }

    public async Task<int> CountAsync()
    {
        return await _unitOfWork.CustomerRepository.CountAsync();
    }

    public async Task<IEnumerable<CustomerDto>> GetPagedAsync(int pageNumber, int pageSize)
    {
        var customers = await _unitOfWork.CustomerRepository.GetPagedAsync(pageNumber, pageSize);
        return customers.Select(c => new CustomerDto
        {
            Id = c.Id,
            Name = c.Name,
            Email = c.Email
        }).ToList();
    }

    public async Task ClearAllCustomerCacheAsync(IEnumerable<Guid> customerIds)
    {
        foreach (var id in customerIds)
        {
            var cacheKey = $"{CachePrefix}{id}";
            await _cache.RemoveAsync(cacheKey);
        }
    }
}