using Core.Interfaces;
using Core.Models;
using Infrastructure.Repositories;
using System;
using System.Threading.Tasks;

namespace Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly OrderRepository _orderRepository = new();
        private bool _disposed;

        public IRepository<Order> Orders => _orderRepository;

        public Task BeginTransactionAsync()
        {
            // Replace with real DB transaction logic if needed
            Console.WriteLine("Transaction started.");
            return Task.CompletedTask;
        }

        public Task CommitTransactionAsync()
        {
            Console.WriteLine("Transaction committed.");
            return Task.CompletedTask;
        }

        public Task RollbackTransactionAsync()
        {
            Console.WriteLine("Transaction rolled back.");
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