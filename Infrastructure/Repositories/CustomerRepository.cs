using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Repositories;

public sealed class CustomerRepository : Repository<Customer>, ICustomerRepository
{
    public Task<IEnumerable<Customer>> SearchByNameAsync(string name)
    {
        return FindAsync(c => !string.IsNullOrEmpty(c.Name) && c.Name.Contains(name, StringComparison.OrdinalIgnoreCase));
    }

    public Task<Customer?> GetByEmailAsync(string email)
    {
        return FirstOrDefaultAsync(c => c.Email != null && c.Email.Equals(email, StringComparison.OrdinalIgnoreCase));
    }

}