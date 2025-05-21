using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly IRepository<Customer> _repository;
        private readonly ICacheService _cache;
        private const string CachePrefix = "customer_";

        public CustomerService(IRepository<Customer> repository, ICacheService cache)
        {
            _repository = repository;
            _cache = cache;
        }

        public async Task<Customer?> GetByIdAsync(Guid id)
        {
            var cacheKey = $"{CachePrefix}{id}";
            var cached = await _cache.GetAsync<Customer>(cacheKey);
            if (cached != null) return cached;

            var customer = await _repository.GetByIdAsync(id);
            if (customer != null)
                await _cache.SetAsync(cacheKey, customer, TimeSpan.FromMinutes(10));
            return customer;
        }

        public async Task<IEnumerable<Customer>> GetAllAsync()
        {
            // Optionally cache all customers if needed
            return await _repository.GetAllAsync();
        }

        public async Task<Customer> CreateAsync(Customer customer)
        {
            var created = await _repository.AddAsync(customer);
            var cacheKey = $"{CachePrefix}{created.Id}";
            await _cache.SetAsync(cacheKey, created, TimeSpan.FromMinutes(10));
            return created;
        }

        public async Task UpdateAsync(Customer customer)
        {
            await _repository.UpdateAsync(customer);
            var cacheKey = $"{CachePrefix}{customer.Id}";
            await _cache.SetAsync(cacheKey, customer, TimeSpan.FromMinutes(10));
        }

        public async Task DeleteAsync(Guid id)
        {
            await _repository.DeleteAsync(id);
            var cacheKey = $"{CachePrefix}{id}";
            await _cache.RemoveAsync(cacheKey);
        }
    }
}