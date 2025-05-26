using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Specifications
{
    public class OrderHasAtLeastOneItemSpecification : Specification<Order>
    {
        public override Expression<Func<Order, bool>> ToExpression()
            => order => order.Items.Count > 0;
    }
}