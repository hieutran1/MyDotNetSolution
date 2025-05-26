using System;
using System.Globalization;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Shared.ValueObjects
{
    /// <summary>
    /// Represents a monetary value object.
    /// </summary>
    public sealed class Money : IEquatable<Money>
    {
        public decimal Amount { get; }
        public string Currency { get; }

        public Money(decimal amount, string currency)
        {
            if (string.IsNullOrWhiteSpace(currency))
                throw new DomainException("Currency must be provided.", "MONEY_CURRENCY_REQUIRED");
            if (amount < 0)
                throw new DomainException("Amount cannot be negative.", "MONEY_AMOUNT_NEGATIVE", new { amount, currency });

            Amount = decimal.Round(amount, 2, MidpointRounding.AwayFromZero);
            Currency = currency.ToUpperInvariant();
        }

        public Money Add(Money other)
        {
            EnsureSameCurrency(other);
            return new Money(Amount + other.Amount, Currency);
        }

        public Money Subtract(Money other)
        {
            EnsureSameCurrency(other);
            return new Money(Amount - other.Amount, Currency);
        }

        public Money Multiply(decimal factor)
        {
            return new Money(Amount * factor, Currency);
        }

        private void EnsureSameCurrency(Money other)
        {
            if (!Currency.Equals(other.Currency, StringComparison.OrdinalIgnoreCase))
                throw new DomainException("Cannot operate on Money values with different currencies.", "MONEY_CURRENCY_MISMATCH", new { Currency, other.Currency });
        }

        public override bool Equals(object? obj) => Equals(obj as Money);

        public bool Equals(Money? other)
        {
            if (other is null) return false;
            return Amount == other.Amount && Currency == other.Currency;
        }

        public override int GetHashCode() => HashCode.Combine(Amount, Currency);

        public static bool operator ==(Money left, Money right) => left?.Equals(right) ?? right is null;
        public static bool operator !=(Money left, Money right) => !(left == right);

        public override string ToString() => string.Format(CultureInfo.InvariantCulture, "{0} {1:N2}", Currency, Amount);
    }
}