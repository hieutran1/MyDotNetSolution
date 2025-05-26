using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared.Enums;

namespace MyDotNetSolution.Core.Specifications
{
    public class OrderPaidForCustomerSpecification : Specification<Order>
    {
        private readonly Guid _customerId;

        public OrderPaidForCustomerSpecification(Guid customerId)
        {
            _customerId = customerId;
        }

        public override Expression<Func<Order, bool>> ToExpression()
        {
            return order => order.CustomerId == _customerId && order.Status == OrderStatus.Paid;
        }
    }
}