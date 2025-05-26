using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Shared.DTOs;

namespace Application.Shared.Interfaces
{
    public interface ICustomerService
    {
        Task<CustomerDto?> GetByIdAsync(Guid id);
        Task<IEnumerable<CustomerDto>> GetAllAsync();
        Task<CustomerDto> CreateAsync(CustomerDto customer);
        Task UpdateAsync(CustomerDto customer);
        Task DeleteAsync(Guid id);

        // Enhancements
        Task<IEnumerable<CustomerDto>> SearchByNameAsync(string name);
        Task<CustomerDto?> GetByEmailAsync(string email);
        Task<bool> ExistsAsync(Guid id);
        Task<int> CountAsync();
        Task<IEnumerable<CustomerDto>> GetPagedAsync(int pageNumber, int pageSize);
        Task ClearAllCustomerCacheAsync(IEnumerable<Guid> customerIds);
    }
}