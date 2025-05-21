using Core.Interfaces;
using Core.Models;
using Infrastructure.Repositories;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ILogger<UnitOfWork> _logger;
        private readonly OrderRepository _orderRepository = new();
        private bool _disposed;

        public IRepository<Order> Orders => _orderRepository;

        public UnitOfWork(ILogger<UnitOfWork> logger)
        {
            _logger = logger;
        }
        public Task BeginTransactionAsync()
        {
            // Replace with real DB transaction logic if needed
            _logger.LogInformation("Transaction started.");
            return Task.CompletedTask;
        }

        public Task CommitTransactionAsync()
        {
            _logger.LogInformation("Transaction committed.");
            return Task.CompletedTask;
        }

        public Task RollbackTransactionAsync()
        {
            _logger.LogInformation("Transaction rolled back.");
            return Task.CompletedTask;
        }

        public void Dispose()
        {
            if (!_disposed)
            {
                // Dispose resources if needed
                _disposed = true;
            }
        }
    }
}