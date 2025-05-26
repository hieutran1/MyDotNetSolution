using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared.ValueObjects;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Services
{
    /// <summary>
    /// Domain service for calculating order totals and applying business pricing rules.
    /// </summary>
    public class OrderPricingService : IOrderPricingService
    {
        public Money CalculateTotal(Order order)
        {
            if (order == null)
                throw new DomainException("Order cannot be null.", "ORDER_NULL");

            if (order.Items.Count == 0)
                throw new DomainException("Order must have at least one item.", "ORDER_EMPTY");

            decimal total = 0;
            foreach (var item in order.Items)
            {
                total += item.UnitPrice * item.Quantity;
            }
            return new Money(total, order.Currency ?? "USD");
        }
    }
}