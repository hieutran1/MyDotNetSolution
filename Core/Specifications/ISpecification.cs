using System;
using System.Linq.Expressions;

namespace MyDotNetSolution.Core.Specifications
{
    public interface ISpecification<T>
    {
        Expression<Func<T, bool>> ToExpression();
        bool IsSatisfiedBy(T entity);
    }
}