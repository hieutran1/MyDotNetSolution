using Core.Interfaces;
using Core.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class OrderRepository : IRepository<Order>
    {
        private readonly List<Order> _orders = new();

        public Task AddAsync(Order entity)
        {
            _orders.Add(entity);
            return Task.CompletedTask;
        }

        public Task DeleteAsync(int id)
        {
            var order = _orders.FirstOrDefault(o => o.Id == id);
            if (order != null) _orders.Remove(order);
            return Task.CompletedTask;
        }

        public Task<IEnumerable<Order>> GetAllAsync() => Task.FromResult<IEnumerable<Order>>(_orders);

        public Task<Order?> GetByIdAsync(int id) => Task.FromResult(_orders.FirstOrDefault(o => o.Id == id));

        public Task UpdateAsync(Order entity)
        {
            var order = _orders.FirstOrDefault(o => o.Id == entity.Id);
            if (order != null)
            {
                order.CustomerName = entity.CustomerName;
                order.TotalAmount = entity.TotalAmount;
            }
            return Task.CompletedTask;
        }
    }
}