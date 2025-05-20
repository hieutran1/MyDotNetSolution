using System;
using System.Threading.Tasks;
using Core.Models;

namespace Core.Interfaces;

public interface IUnitOfWork : IDisposable
{
    IRepository<Order> Orders { get; }
    Task BeginTransactionAsync();
    Task CommitTransactionAsync();
    Task RollbackTransactionAsync();
}