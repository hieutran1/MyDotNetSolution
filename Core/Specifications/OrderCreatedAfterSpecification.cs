using System;
using System.Linq.Expressions;
using MyDotNetSolution.Core.Entities;

namespace MyDotNetSolution.Core.Specifications;

public class OrderCreatedAfterSpecification : Specification<Order>
{
    private readonly DateTime _date;
    public OrderCreatedAfterSpecification(DateTime date) => _date = date;

    public override Expression<Func<Order, bool>> ToExpression()
        => order => order.CreatedAt > _date;
}