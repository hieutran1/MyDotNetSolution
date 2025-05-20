using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class CachedRepository<T> : IRepository<T> where T : class
    {
        private readonly IRepository<T> _repository;
        private readonly ICacheService _cacheService;
        private readonly TimeSpan _cacheExpiration = TimeSpan.FromMinutes(5);

        public CachedRepository(IRepository<T> repository, ICacheService cacheService)
        {
            _repository = repository;
            _cacheService = cacheService;
        }

        public async Task<T?> GetByIdAsync(int id)
        {
            string cacheKey = $"{typeof(T).Name}_Id_{id}";
            var cachedEntity = await _cacheService.GetAsync<T>(cacheKey);

            if (cachedEntity != null)
            {
                return cachedEntity;
            }

            var entity = await _repository.GetByIdAsync(id);
            if (entity != null)
            {
                await _cacheService.SetAsync(cacheKey, entity, _cacheExpiration);
            }

            return entity;
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            string cacheKey = $"{typeof(T).Name}_All";
            var cachedEntities = await _cacheService.GetAsync<IEnumerable<T>>(cacheKey);

            if (cachedEntities != null)
            {
                return cachedEntities;
            }

            var entities = await _repository.GetAllAsync();
            await _cacheService.SetAsync(cacheKey, entities, _cacheExpiration);

            return entities;
        }

        public async Task AddAsync(T entity)
        {
            await _repository.AddAsync(entity);
            await _cacheService.RemoveAsync($"{typeof(T).Name}_All");
        }

        public async Task UpdateAsync(T entity)
        {
            await _repository.UpdateAsync(entity);
            await _cacheService.RemoveAsync($"{typeof(T).Name}_All");
        }

        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
            await _cacheService.RemoveAsync($"{typeof(T).Name}_Id_{id}");
            await _cacheService.RemoveAsync($"{typeof(T).Name}_All");
        }
    }
}