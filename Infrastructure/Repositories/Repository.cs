using MyDotNetSolution.Core.Shared;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Infrastructure.Repositories;

public class Repository<T> : IRepository<T> where T : IEntity
{
    protected readonly ConcurrentDictionary<Guid, T> _store = new();
    protected readonly ConcurrentDictionary<Guid, DateTime> _lastModified = new();
    private readonly PropertyInfo? _idProperty;

    public Repository()
    {
        _idProperty = typeof(T).GetProperty("Id");
        if (_idProperty == null || _idProperty.PropertyType != typeof(Guid))
            throw new InvalidOperationException("Entity must have an Id property of type Guid.");
    }

    protected Guid GetId(T entity)
    {
        return (Guid)(_idProperty?.GetValue(entity) ?? throw new InvalidOperationException("Id property not found."));
    }

    public virtual Task<T?> GetByIdAsync(Guid id)
    {
        _store.TryGetValue(id, out var entity);
        return Task.FromResult(entity);
    }

    public virtual Task<IEnumerable<T>> GetAllAsync()
    {
        return Task.FromResult<IEnumerable<T>>(_store.Values.ToList());
    }

    public virtual Task<T> AddAsync(T entity)
    {
        var id = GetId(entity);
        _store[id] = entity;
        _lastModified[id] = DateTime.UtcNow;
        return Task.FromResult(entity);
    }

    public virtual Task UpdateAsync(T entity)
    {
        var id = GetId(entity);
        _store[id] = entity;
        _lastModified[id] = DateTime.UtcNow;
        return Task.CompletedTask;
    }

    public virtual Task DeleteAsync(Guid id)
    {
        _store.TryRemove(id, out _);
        _lastModified.TryRemove(id, out _);
        return Task.CompletedTask;
    }

    public virtual Task<bool> ExistsAsync(Guid id)
    {
        return Task.FromResult(_store.ContainsKey(id));
    }

    public virtual Task<int> CountAsync()
    {
        return Task.FromResult(_store.Count);
    }

    public virtual Task<IEnumerable<T>> GetPagedAsync(int pageNumber, int pageSize)
    {
        var result = _store.Values
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .ToList();
        return Task.FromResult<IEnumerable<T>>(result);
    }

    public virtual Task<IEnumerable<T>> FindAsync(Func<T, bool> predicate)
    {
        var result = _store.Values.Where(predicate).ToList();
        return Task.FromResult<IEnumerable<T>>(result);
    }

    public virtual Task<T?> FirstOrDefaultAsync(Func<T, bool> predicate)
    {
        var result = _store.Values.FirstOrDefault(predicate);
        return Task.FromResult(result);
    }

    public virtual Task<DateTime?> GetLastModifiedAsync(Guid id)
    {
        if (_lastModified.TryGetValue(id, out var date))
            return Task.FromResult<DateTime?>(date);
        return Task.FromResult<DateTime?>(null);
    }

    public virtual Task AddRangeAsync(IEnumerable<T> entities)
    {
        foreach (var entity in entities)
        {
            var id = GetId(entity);
            _store[id] = entity;
            _lastModified[id] = DateTime.UtcNow;
        }
        return Task.CompletedTask;
    }

    public virtual Task DeleteRangeAsync(IEnumerable<Guid> ids)
    {
        foreach (var id in ids)
        {
            _store.TryRemove(id, out _);
            _lastModified.TryRemove(id, out _);
        }
        return Task.CompletedTask;
    }

    public virtual Task<IEnumerable<T>> GetByIdsAsync(IEnumerable<Guid> ids)
    {
        var result = ids.Select(id => _store.TryGetValue(id, out var entity) ? entity : default)
                        .Where(e => e != null)
                        .ToList();
        return Task.FromResult<IEnumerable<T>>(result!);
    }

    public virtual Task<IEnumerable<T>> GetModifiedSinceAsync(DateTime since)
    {
        var result = _lastModified
            .Where(kvp => kvp.Value >= since)
            .Select(kvp => _store[kvp.Key])
            .ToList();
        return Task.FromResult<IEnumerable<T>>(result);
    }
}