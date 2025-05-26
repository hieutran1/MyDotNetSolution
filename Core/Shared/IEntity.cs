using System;

namespace MyDotNetSolution.Core.Shared
{
    /// <summary>
    /// Marker interface for all domain entities.
    /// </summary>
    public interface IEntity
    {
        /// <summary>
        /// Unique identifier for the entity.
        /// </summary>
        Guid Id { get; }
    }
}