using System;
using System.Text.RegularExpressions;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Shared.ValueObjects
{
    public sealed class EmailAddress : IEquatable<EmailAddress>
    {
        private static readonly Regex EmailRegex = new(@"^[^@\s]+@[^@\s]+\.[^@\s]+$", RegexOptions.Compiled);

        public string Value { get; }

        private EmailAddress(string value)
        {
            Value = value;
        }

        public static EmailAddress Create(string value)
        {
            if (string.IsNullOrWhiteSpace(value) || !EmailRegex.IsMatch(value))
                throw new DomainException("Invalid email address.", "EMAIL_INVALID", value);
            return new EmailAddress(value.Trim().ToLowerInvariant());
        }

        public override bool Equals(object? obj) => Equals(obj as EmailAddress);
        public bool Equals(EmailAddress? other) => other is not null && Value == other.Value;
        public override int GetHashCode() => Value.GetHashCode();
        public override string ToString() => Value;
    }
}