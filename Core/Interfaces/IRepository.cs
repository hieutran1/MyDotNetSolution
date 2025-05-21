using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MyDotNetSolution.Core;

namespace Core.Interfaces
{
    public interface IRepository<T> where T : IEntity
    {
        Task<T?> GetByIdAsync(Guid id);
        Task<IEnumerable<T>> GetAllAsync();
        Task<T> AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task DeleteAsync(Guid id);
    }
}