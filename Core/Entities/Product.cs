using System;
using MyDotNetSolution.Core.Shared;
using MyDotNetSolution.Core.Shared.ValueObjects;

namespace MyDotNetSolution.Core.Entities
{
    public class Product : EntityBase
    {
        public string Name { get; private set; }
        public string? Description { get; private set; }
        public Money Price { get; private set; }
        public bool IsActive { get; private set; }

        public Product(string name, Money price, string? description = null)
        {
            Name = name?.Trim() ?? throw new DomainException("Product name is required.", "PRODUCT_NAME_REQUIRED");
            Price = price ?? throw new DomainException("Product price is required.", "PRODUCT_PRICE_REQUIRED");
            if (price.Amount < 0)
                throw new DomainException("Product price cannot be negative.", "PRODUCT_PRICE_NEGATIVE", new { name, price.Amount });
            Description = description?.Trim();
            IsActive = true;
        }

        public void Deactivate()
        {
            if (!IsActive)
                throw new DomainException("Product is already inactive.", "PRODUCT_ALREADY_INACTIVE", new { Name });
            IsActive = false;
        }

        public void Activate()
        {
            if (IsActive)
                throw new DomainException("Product is already active.", "PRODUCT_ALREADY_ACTIVE", new { Name });
            IsActive = true;
        }

        public override string ToString() => $"Product [Id={Id}, Name={Name}, Price={Price}, IsActive={IsActive}]";
    }
}