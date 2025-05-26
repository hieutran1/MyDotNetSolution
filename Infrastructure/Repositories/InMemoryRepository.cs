using MyDotNetSolution.Core.Shared;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class InMemoryRepository<T> : IRepository<T> where T : IEntity
    {
        private readonly ConcurrentDictionary<Guid, T> _store = new();
        private readonly Func<T, Guid> _getId;

        public InMemoryRepository(Func<T, Guid> getId)
        {
            _getId = getId;
        }

        public Task<T?> GetByIdAsync(Guid id)
        {
            _store.TryGetValue(id, out var entity);
            return Task.FromResult(entity);
        }

        public Task<IEnumerable<T>> GetAllAsync()
        {
            return Task.FromResult(_store.Values.AsEnumerable());
        }

        public Task<T> AddAsync(T entity)
        {
            var id = _getId(entity);
            _store[id] = entity;
            return Task.FromResult(entity);
        }

        public Task UpdateAsync(T entity)
        {
            var id = _getId(entity);
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