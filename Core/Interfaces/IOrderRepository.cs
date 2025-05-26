using System.Collections.Generic;
using System.Threading.Tasks;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared;
using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Specifications;

namespace MyDotNetSolution.Core.Interfaces
{
    public interface IOrderRepository : IRepository<Order>
    {
        Task<IEnumerable<Order>> GetOrdersByCustomerAsync(string customerName);

        // Enhancements
        Task<IEnumerable<Order>> SearchByAmountRangeAsync(decimal minAmount, decimal maxAmount);
        Task<IEnumerable<Order>> GetRecentOrdersAsync(int count);

        // Specification pattern methods
        IEnumerable<Order> Find(Expression<Func<Order, bool>> predicate);
        // or
        IEnumerable<Order> Find(ISpecification<Order> specification);
    }
}