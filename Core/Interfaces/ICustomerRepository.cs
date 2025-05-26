using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyDotNetSolution.Core.Interfaces
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        // Enhancements
        Task<IEnumerable<Customer>> SearchByNameAsync(string name);

        // Further enhancements
        Task<Customer?> GetByEmailAsync(string email);
    }
}