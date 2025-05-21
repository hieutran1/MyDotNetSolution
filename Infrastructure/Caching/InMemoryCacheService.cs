using Core.Interfaces;
using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace Infrastructure.Caching
{
    public class InMemoryCacheService : ICacheService
    {
        private readonly ConcurrentDictionary<string, (object value, DateTime? expires)> _cache = new();

        public Task<T?> GetAsync<T>(string key)
        {
            if (_cache.TryGetValue(key, out var entry))
            {
                if (entry.expires == null || entry.expires > DateTime.UtcNow)
                    return Task.FromResult((T?)entry.value);
                _cache.TryRemove(key, out _);
            }
            return Task.FromResult(default(T));
        }

        public Task SetAsync<T>(string key, T value, TimeSpan? expiration = null)
        {
            var expires = expiration.HasValue ? DateTime.UtcNow.Add(expiration.Value) : (DateTime?)null;
            _cache[key] = (value!, expires);
            return Task.CompletedTask;
        }

        public Task RemoveAsync(string key)
        {
            _cache.TryRemove(key, out _);
            return Task.CompletedTask;
        }
    }
}