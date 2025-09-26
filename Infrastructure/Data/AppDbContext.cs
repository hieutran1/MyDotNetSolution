using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MyDotNetSolution.Core.Entities;

namespace Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Language> Languages { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public void Initialize()
        {
            Customers.AddRange(GetSeedingCustomers());
            SaveChanges();
        }

        private static List<Customer> GetSeedingCustomers() => [
                new Customer("Customer", "cus@email.com", null)
            ];
    }
}