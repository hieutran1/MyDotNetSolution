using Core.Interfaces;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class CachedRepository<T> : IRepository<T> where T : class
    {
        private readonly IRepository<T> _innerRepository;
        private readonly IMemoryCache _cache;
        private readonly PropertyInfo _idProperty;
        private readonly string _cacheKeyPrefix = typeof(T).FullName + "_";

        public CachedRepository(IRepository<T> innerRepository, IMemoryCache cache)
        {
            _innerRepository = innerRepository;
            _cache = cache;
            _idProperty = typeof(T).GetProperty("Id") ?? throw new InvalidOperationException("Entity must have an Id property of type Guid.");
        }

        private Guid GetId(T entity)
        {
            return (Guid)(_idProperty.GetValue(entity) ?? throw new InvalidOperationException("Id property not found."));
        }

        private string GetCacheKey(Guid id) => _cacheKeyPrefix + id.ToString();

        public async Task<T?> GetByIdAsync(Guid id)
        {
            var cacheKey = GetCacheKey(id);
            if (_cache.TryGetValue(cacheKey, out T? entity))
            {
                return entity;
            }

            entity = await _innerRepository.GetByIdAsync(id);
            if (entity != null)
            {
                _cache.Set(cacheKey, entity, TimeSpan.FromMinutes(10));
            }
            return entity;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            // For simplicity, do not cache the entire collection
            return await _innerRepository.GetAllAsync();
        }

        public async Task<T> AddAsync(T entity)
        {
            var added = await _innerRepository.AddAsync(entity);
            var cacheKey = GetCacheKey(GetId(added));
            _cache.Set(cacheKey, added, TimeSpan.FromMinutes(10));
            return added;
        }

        public async Task UpdateAsync(T entity)
        {
            await _innerRepository.UpdateAsync(entity);
            var cacheKey = GetCacheKey(GetId(entity));
            _cache.Set(cacheKey, entity, TimeSpan.FromMinutes(10));
        }

        public async Task DeleteAsync(Guid id)
        {
            await _innerRepository.DeleteAsync(id);
            var cacheKey = GetCacheKey(id);
            _cache.Remove(cacheKey);
        }
    }
}