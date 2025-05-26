using System;

namespace MyDotNetSolution.Core.Shared
{
    /// <summary>
    /// Abstract base class for all entities, providing identity, equality, and domain event support.
    /// </summary>
    public abstract class EntityBase : IEntity
    {
        /// <summary>
        /// Unique identifier for the entity.
        /// </summary>
        public Guid Id { get; protected set; }

        /// <summary>
        /// Determines if the entity is transient (not persisted).
        /// </summary>
        public bool IsTransient() => Id == Guid.Empty;

        public override bool Equals(object? obj)
        {
            if (obj is not EntityBase other)
                return false;

            if (ReferenceEquals(this, other))
                return true;

            if (IsTransient() || other.IsTransient())
                return false;

            return Id.Equals(other.Id) && GetType() == other.GetType();
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(GetType(), Id);
        }

        public static bool operator ==(EntityBase? left, EntityBase? right)
        {
            if (left is null && right is null) return true;
            if (left is null || right is null) return false;
            return left.Equals(right);
        }

        public static bool operator !=(EntityBase? left, EntityBase? right) => !(left == right);

        public override string ToString() => $"{GetType().Name} [Id={Id}]";
    }
}