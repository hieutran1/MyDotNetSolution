using System;
using System.Linq.Expressions;

namespace MyDotNetSolution.Core.Specifications
{
    public abstract class Specification<T> : ISpecification<T>
    {
        public abstract Expression<Func<T, bool>> ToExpression();

        public bool IsSatisfiedBy(T entity)
        {
            var predicate = ToExpression().Compile();
            return predicate(entity);
        }

        public Specification<T> And(Specification<T> other) => new AndSpecification<T>(this, other);
        public Specification<T> Or(Specification<T> other) => new OrSpecification<T>(this, other);
        public Specification<T> Not() => new NotSpecification<T>(this);
    }
}