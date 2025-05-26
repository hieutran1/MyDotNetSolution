using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Services
{
    public class OrderLimitPolicy
    {
        private readonly int _maxItems;

        public OrderLimitPolicy(int maxItems)
        {
            _maxItems = maxItems;
        }

        public void Check(Order order)
        {
            if (order.Items.Count > _maxItems)
                throw new DomainException($"Order exceeds the maximum allowed items ({_maxItems}).", "ORDER_ITEM_LIMIT");
        }
    }
}