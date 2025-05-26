using System;
using System.Threading.Tasks;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Interfaces;

namespace MyDotNetSolution.Core.Shared;

public interface IUnitOfWork : IDisposable
{
    // Generic repositories for flexibility
    IRepository<Order> Orders { get; }
    IRepository<Customer> Customers { get; }

    // Strongly-typed repositories for advanced queries and enhancements
    IOrderRepository OrderRepository { get; }
    ICustomerRepository CustomerRepository { get; }

    // Transaction management
    Task BeginTransactionAsync();
    Task CommitTransactionAsync();
    Task RollbackTransactionAsync();

    // Save all changes (if using a DbContext or similar)
    Task SaveChangesAsync();

    // Transaction state
    bool HasActiveTransaction { get; }
    Guid? CurrentTransactionId { get; }
    DateTime? TransactionStartedAt { get; }
    event EventHandler? TransactionCommitted;
    event EventHandler? TransactionRolledBack;

    // Enhancements
    Task<int> SaveChangesAndCommitAsync();
    Task ExecuteInTransactionAsync(Func<Task> action);

    // New enhancements
    bool IsDisposed { get; }
}