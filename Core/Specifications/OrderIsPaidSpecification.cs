using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared.Enums;

namespace MyDotNetSolution.Core.Specifications;

public class OrderIsPaidSpecification : Specification<Order>
{
    public override Expression<Func<Order, bool>> ToExpression()
        => order => order.Status == OrderStatus.Paid;
}
