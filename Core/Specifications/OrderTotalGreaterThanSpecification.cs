using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Specifications;

public class OrderTotalGreaterThanSpecification : Specification<Order>
{
    private readonly decimal _minTotal;
    public OrderTotalGreaterThanSpecification(decimal minTotal) => _minTotal = minTotal;

    public override Expression<Func<Order, bool>> ToExpression()
        => order => order.TotalAmount > _minTotal;
}
