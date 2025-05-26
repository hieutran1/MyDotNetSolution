using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyDotNetSolution.Core.Shared;

public interface IRepository<T> where T : IEntity
{
    Task<T?> GetByIdAsync(Guid id);
    Task<IEnumerable<T>> GetAllAsync();
    Task<T> AddAsync(T entity);
    Task UpdateAsync(T entity);
    Task DeleteAsync(Guid id);

    // Enhancements
    Task<bool> ExistsAsync(Guid id);
    Task<int> CountAsync();
    Task<IEnumerable<T>> GetPagedAsync(int pageNumber, int pageSize);

    // Further enhancements
    Task<IEnumerable<T>> FindAsync(Func<T, bool> predicate);
    Task<T?> FirstOrDefaultAsync(Func<T, bool> predicate);
    Task<DateTime?> GetLastModifiedAsync(Guid id);

    // New enhancements
    Task AddRangeAsync(IEnumerable<T> entities);
    Task DeleteRangeAsync(IEnumerable<Guid> ids);
    Task<IEnumerable<T>> GetByIdsAsync(IEnumerable<Guid> ids);
    Task<IEnumerable<T>> GetModifiedSinceAsync(DateTime since);
}