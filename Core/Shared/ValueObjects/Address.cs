using System;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Shared.ValueObjects
{
    /// <summary>
    /// Represents a postal address value object.
    /// </summary>
    public sealed class Address : IEquatable<Address>
    {
        public string Street { get; }
        public string City { get; }
        public string State { get; }
        public string PostalCode { get; }
        public string Country { get; }

        public Address(string street, string city, string state, string postalCode, string country)
        {
            Street = !string.IsNullOrWhiteSpace(street) ? street.Trim() : throw new DomainException("Street is required.", "ADDRESS_STREET_REQUIRED");
            City = !string.IsNullOrWhiteSpace(city) ? city.Trim() : throw new DomainException("City is required.", "ADDRESS_CITY_REQUIRED");
            State = !string.IsNullOrWhiteSpace(state) ? state.Trim() : throw new DomainException("State is required.", "ADDRESS_STATE_REQUIRED");
            PostalCode = !string.IsNullOrWhiteSpace(postalCode) ? postalCode.Trim() : throw new DomainException("Postal code is required.", "ADDRESS_POSTALCODE_REQUIRED");
            Country = !string.IsNullOrWhiteSpace(country) ? country.Trim() : throw new DomainException("Country is required.", "ADDRESS_COUNTRY_REQUIRED");
        }

        public override bool Equals(object? obj) => Equals(obj as Address);

        public bool Equals(Address? other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;
            return Street == other.Street
                && City == other.City
                && State == other.State
                && PostalCode == other.PostalCode
                && Country == other.Country;
        }

        public override int GetHashCode() =>
            HashCode.Combine(Street, City, State, PostalCode, Country);

        public static bool operator ==(Address? left, Address? right) => left?.Equals(right) ?? right is null;
        public static bool operator !=(Address? left, Address? right) => !(left == right);

        public override string ToString() =>
            $"{Street}, {City}, {State}, {PostalCode}, {Country}";
    }
}