using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Repositories;

public class OrderRepository : Repository<Order>, IOrderRepository
{
    public Task<IEnumerable<Order>> GetOrdersByCustomerAsync(string customerName)
    {
        return FindAsync(o => !string.IsNullOrEmpty(o.CustomerName) && o.CustomerName.Equals(customerName, StringComparison.OrdinalIgnoreCase));
    }

    public Task<IEnumerable<Order>> SearchByAmountRangeAsync(decimal minAmount, decimal maxAmount)
    {
        return FindAsync(o => o.TotalAmount >= minAmount && o.TotalAmount <= maxAmount);
    }

    public Task<IEnumerable<Order>> GetRecentOrdersAsync(int count)
    {
        var result = _store.Values
            .OrderByDescending(o => o.CreatedAt)
            .Take(count)
            .ToList();
        return Task.FromResult<IEnumerable<Order>>(result);
    }
}