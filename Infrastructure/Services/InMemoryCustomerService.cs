using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Services
{
    public class InMemoryCustomerService : ICustomerService
    {
        private readonly ConcurrentDictionary<Guid, Customer> _customers = new();

        public Task<Customer?> GetByIdAsync(Guid id)
        {
            _customers.TryGetValue(id, out var customer);
            return Task.FromResult(customer);
        }

        public Task<IEnumerable<Customer>> GetAllAsync()
        {
            return Task.FromResult(_customers.Values.AsEnumerable());
        }

        public Task<Customer> CreateAsync(Customer customer)
        {
            customer.Id = Guid.NewGuid();
            _customers[customer.Id] = customer;
            return Task.FromResult(customer);
        }

        public Task UpdateAsync(Customer customer)
        {
            _customers[customer.Id] = customer;
            return Task.CompletedTask;
        }

        public Task DeleteAsync(Guid id)
        {
            _customers.TryRemove(id, out _);
            return Task.CompletedTask;
        }
    }
}