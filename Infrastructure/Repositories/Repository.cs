using Core.Interfaces;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly ConcurrentDictionary<Guid, T> _store = new ConcurrentDictionary<Guid, T>();
        private readonly PropertyInfo? _idProperty;

        public Repository()
        {
            _idProperty = typeof(T).GetProperty("Id");
            if (_idProperty == null || _idProperty.PropertyType != typeof(Guid))
                throw new InvalidOperationException("Entity must have an Id property of type Guid.");
        }

        private Guid GetId(T entity)
        {
            return (Guid)(_idProperty?.GetValue(entity) ?? throw new InvalidOperationException("Id property not found."));
        }

        public Task<T?> GetByIdAsync(Guid id)
        {
            var entity = _store.Values.FirstOrDefault(e => GetId(e) == id);
            return Task.FromResult(entity);
        }

        public Task<IEnumerable<T>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<T>>(_store.Values.ToList());
        }

        public Task<T> AddAsync(T entity)
        {
            var id = GetId(entity);
            _store[id] = entity;
            return Task.FromResult(entity);
        }

        public Task UpdateAsync(T entity)
        {
            var id = GetId(entity);
            _store[id] = entity;
            return Task.CompletedTask;
        }

        public Task DeleteAsync(Guid id)
        {
            _store.TryRemove(id, out _);
            return Task.CompletedTask;
        }
    }
}