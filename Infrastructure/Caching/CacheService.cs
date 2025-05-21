using Core.Interfaces;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;

namespace Infrastructure.Caching
{
    public class CacheService : ICacheService
    {
        private readonly IMemoryCache _cache;

        public CacheService(IMemoryCache cache) => _cache = cache;

        public Task<T?> GetAsync<T>(string key)
        {
            _cache.TryGetValue(key, out T? value);
            return Task.FromResult(value);
        }

        public Task SetAsync<T>(string key, T value, TimeSpan? expiration)
        {
            if (expiration.HasValue)
            {
                _cache.Set(key, value, expiration.Value);
            }
            else
            {
                _cache.Set(key, value);
            }
            return Task.CompletedTask;
        }

        public Task RemoveAsync(string key)
        {
            _cache.Remove(key);
            return Task.CompletedTask;
        }
    }
}