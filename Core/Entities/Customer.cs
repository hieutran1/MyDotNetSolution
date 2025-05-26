using System;
using MyDotNetSolution.Core.Shared;
using MyDotNetSolution.Core.Shared.ValueObjects;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Core.Entities
{
    public class Customer : AggregateRootBase
    {
        public string Name { get; private set; }
        public string? Email { get; private set; }
        public Address? Address { get; private set; }
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public bool IsActive { get; private set; } = true;

        public Customer(string name, string? email, Address? address)
        {
            Name = name?.Trim() ?? throw new DomainException("Customer name is required.", "CUSTOMER_NAME_REQUIRED");
            Email = email?.Trim();
            Address = address;
        }

        public void UpdateContactInfo(string name, string? email, Address? address)
        {
            Name = name?.Trim() ?? throw new DomainException("Customer name is required.", "CUSTOMER_NAME_REQUIRED");
            Email = email?.Trim();
            Address = address;
            AddDomainEvent(new CustomerUpdatedEvent(this));
        }

        public void Deactivate(string? reason = null)
        {
            if (!IsActive)
                throw new DomainException("Customer is already inactive.", "CUSTOMER_ALREADY_INACTIVE", new { Name });
            IsActive = false;
            AddDomainEvent(new CustomerDeactivatedEvent(this, reason));
        }

        public void Activate()
        {
            if (IsActive)
                throw new DomainException("Customer is already active.", "CUSTOMER_ALREADY_ACTIVE", new { Name });
            IsActive = true;
            AddDomainEvent(new CustomerActivatedEvent(this));
        }

        public override string ToString() =>
            $"Customer [Id={Id}, Name={Name}, Email={Email}, IsActive={IsActive}]";
    }
}