using System;
using System.Runtime.Serialization;

namespace MyDotNetSolution.Core.Shared
{
    /// <summary>
    /// Represents errors that occur when a domain rule is violated, with optional error code and context.
    /// </summary>
    [Serializable]
    public class DomainException : Exception
    {
        /// <summary>
        /// Gets the domain-specific error code.
        /// </summary>
        public string? ErrorCode { get; }

        /// <summary>
        /// Gets additional context information for the error.
        /// </summary>
        public object? Context { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="DomainException"/> class.
        /// </summary>
        public DomainException() { }

        /// <summary>
        /// Initializes a new instance of the <see cref="DomainException"/> class with a specified error message.
        /// </summary>
        public DomainException(string message)
            : base(message) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="DomainException"/> class with a specified error message and a reference to the inner exception that is the cause of this exception.
        /// </summary>
        public DomainException(string message, Exception innerException)
            : base(message, innerException) { }

        /// <summary>
        /// Initializes a new instance of the <see cref="DomainException"/> class with a specified error message, error code, and optional context.
        /// </summary>
        public DomainException(string message, string? errorCode, object? context = null)
            : base(message)
        {
            ErrorCode = errorCode;
            Context = context;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="DomainException"/> class with serialized data.
        /// </summary>
        protected DomainException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
            ErrorCode = info.GetString(nameof(ErrorCode));
            Context = info.GetValue(nameof(Context), typeof(object));
        }

        /// <summary>
        /// Sets the SerializationInfo with the data needed to serialize the DomainException.
        /// </summary>
        public override void GetObjectData(SerializationInfo info, StreamingContext context)
        {
            base.GetObjectData(info, context);
            info.AddValue(nameof(ErrorCode), ErrorCode);
            info.AddValue(nameof(Context), Context);
        }
    }
}