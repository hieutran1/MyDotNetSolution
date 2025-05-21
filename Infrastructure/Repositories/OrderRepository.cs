using Core.Interfaces;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class OrderRepository : IRepository<Order>
    {
        private readonly List<Order> _orders = new List<Order>();

        public Task<Order?> GetByIdAsync(Guid id)
        {
            var order = _orders.FirstOrDefault(o => o.Id == id);
            return Task.FromResult(order);
        }

        public Task<IEnumerable<Order>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<Order>>(_orders.ToList());
        }

        public Task<Order> AddAsync(Order entity)
        {
            _orders.Add(entity);
            return Task.FromResult(entity);
        }

        public Task UpdateAsync(Order entity)
        {
            var existing = _orders.FirstOrDefault(o => o.Id == entity.Id);
            if (existing != null)
            {
                _orders.Remove(existing);
                _orders.Add(entity);
            }
            return Task.CompletedTask;
        }

        public Task DeleteAsync(Guid id)
        {
            var order = _orders.FirstOrDefault(o => o.Id == id);
            if (order != null)
                _orders.Remove(order);
            return Task.CompletedTask;
        }
    }
}