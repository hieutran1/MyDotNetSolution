using System;
using System.Threading.Tasks;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Interfaces;
using Microsoft.Extensions.Logging;
using MyDotNetSolution.Core.Shared;

namespace Infrastructure.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ILogger<UnitOfWork> _logger;
        private readonly IRepository<Order> _orders;
        private readonly IRepository<Customer> _customers;
        private readonly IOrderRepository _orderRepoStrong;
        private readonly ICustomerRepository _customerRepoStrong;

        private bool _disposed;
        private bool _hasActiveTransaction;
        private Guid? _currentTransactionId;
        private DateTime? _transactionStartedAt;

        public event EventHandler? TransactionCommitted;
        public event EventHandler? TransactionRolledBack;

        public IRepository<Order> Orders => _orders;
        public IRepository<Customer> Customers => _customers;
        public IOrderRepository OrderRepository => _orderRepoStrong;
        public ICustomerRepository CustomerRepository => _customerRepoStrong;

        public bool HasActiveTransaction => _hasActiveTransaction;
        public Guid? CurrentTransactionId => _currentTransactionId;
        public DateTime? TransactionStartedAt => _transactionStartedAt;
        public bool IsDisposed => _disposed;

        public UnitOfWork(
            ILogger<UnitOfWork> logger,
            IRepository<Order> orders,
            IRepository<Customer> customers,
            IOrderRepository orderRepoStrong,
            ICustomerRepository customerRepoStrong)
        {
            _logger = logger;
            _orders = orders;
            _customers = customers;
            _orderRepoStrong = orderRepoStrong;
            _customerRepoStrong = customerRepoStrong;
        }

        public async Task BeginTransactionAsync()
        {
            if (_hasActiveTransaction)
                throw new InvalidOperationException("A transaction is already active.");

            _hasActiveTransaction = true;
            _currentTransactionId = Guid.NewGuid();
            _transactionStartedAt = DateTime.UtcNow;
            _logger.LogInformation($"Transaction started: {_currentTransactionId}");
            await Task.CompletedTask;
        }

        public async Task CommitTransactionAsync()
        {
            if (!_hasActiveTransaction)
                throw new InvalidOperationException("No active transaction to commit.");

            _logger.LogInformation($"Transaction committed: {_currentTransactionId}");
            _hasActiveTransaction = false;
            _currentTransactionId = null;
            _transactionStartedAt = null;
            TransactionCommitted?.Invoke(this, EventArgs.Empty);
            await Task.CompletedTask;
        }

        public async Task RollbackTransactionAsync()
        {
            if (!_hasActiveTransaction)
                throw new InvalidOperationException("No active transaction to roll back.");

            _logger.LogWarning($"Transaction rolled back: {_currentTransactionId}");
            _hasActiveTransaction = false;
            _currentTransactionId = null;
            _transactionStartedAt = null;
            TransactionRolledBack?.Invoke(this, EventArgs.Empty);
            await Task.CompletedTask;
        }

        public async Task SaveChangesAsync()
        {
            // In-memory: nothing to do. For EF, call DbContext.SaveChangesAsync().
            await Task.CompletedTask;
        }

        public async Task<int> SaveChangesAndCommitAsync()
        {
            await SaveChangesAsync();
            await CommitTransactionAsync();
            return 1; // Return number of affected entities if possible
        }

        public async Task ExecuteInTransactionAsync(Func<Task> action)
        {
            await BeginTransactionAsync();
            try
            {
                await action();
                await CommitTransactionAsync();
            }
            catch
            {
                await RollbackTransactionAsync();
                throw;
            }
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