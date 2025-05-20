using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Core.Interfaces;

namespace Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly List<T> _dataStore = [];

        public Task AddAsync(T entity)
        {
            _dataStore.Add(entity);
            return Task.CompletedTask;
        }

        public Task UpdateAsync(T entity)
        {
            // Update logic here (e.g., find and replace in _dataStore)
            return Task.CompletedTask;
        }

        public Task DeleteAsync(T entity)
        {
            _dataStore.Remove(entity);
            return Task.CompletedTask;
        }

        public Task DeleteAsync(int id)
        {
            var entity = GetById(id);
            if (entity != null)
            {
                _dataStore.Remove(entity);
            }
            return Task.CompletedTask;
        }

        public Task<T?> GetAsync(Expression<Func<T, bool>> predicate)
        {
            var entity = _dataStore.AsQueryable().FirstOrDefault(predicate);
            return Task.FromResult(entity);
        }

        public Task<T?> GetByIdAsync(int id)
        {
            var entity = GetById(id);
            return Task.FromResult(entity);
        }

        // Helper method to get entity by id using reflection
        private T? GetById(int id)
        {
            var prop = typeof(T).GetProperty("Id");
            if (prop == null)
                return null;
            return _dataStore.FirstOrDefault(e => prop.GetValue(e)?.Equals(id) == true);
        }

        public Task<IEnumerable<T>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<T>>(_dataStore);
        }
    }
}