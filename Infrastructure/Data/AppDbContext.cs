using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using MyDotNetSolution.Core.Entities;

namespace Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public void Initialize()
        {
            Customers.AddRange(GetSeedingCustomers());
            SaveChanges();
        }

        private List<Customer> GetSeedingCustomers()
        {
            return [
                new Customer {
                    Id = Guid.NewGuid(),
                    Name = "Name " + new Random().Next(10),
                    Email = "Email_" + new Random().Next(10) + ".gmail.com"
                }
            ];
        }
    }
}