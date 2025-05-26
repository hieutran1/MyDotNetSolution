using System;
using System.Collections.Generic;
using System.Linq;
using MyDotNetSolution.Core.Shared;
using MyDotNetSolution.Core.Shared.ValueObjects;
using MyDotNetSolution.Core.Shared.Enums;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Core.Entities
{
    public class Invoice : AggregateRootBase
    {
        public Guid CustomerId { get; private set; }
        public DateTime IssuedAt { get; private set; } = DateTime.UtcNow;
        public DateTime? PaidAt { get; private set; }
        public InvoiceStatus Status { get; private set; }
        private readonly List<InvoiceLine> _lines = new();
        public IReadOnlyCollection<InvoiceLine> Lines => _lines.AsReadOnly();
        public Money Total { get; private set; }

        public Invoice(Guid customerId, string currency)
        {
            CustomerId = customerId;
            Status = InvoiceStatus.Issued;
            Total = new Money(0, currency ?? throw new DomainException("Currency is required.", "INVOICE_CURRENCY_REQUIRED"));
        }

        public void AddLine(InvoiceLine line)
        {
            if (line == null)
                throw new DomainException("Invoice line cannot be null.", "INVOICE_LINE_NULL");
            if (_lines.Any(l => l.ProductId == line.ProductId))
                throw new DomainException("Product already exists in the invoice.", "INVOICE_LINE_DUPLICATE", new { line.ProductId });
            if (line.Price.Currency != Total.Currency)
                throw new DomainException("All lines must use the same currency as the invoice.", "INVOICE_LINE_CURRENCY_MISMATCH", new { line.ProductId, line.Price.Currency, Total.Currency });
            _lines.Add(line);
            RecalculateTotal();
        }

        public void RemoveLine(Guid productId)
        {
            var line = _lines.FirstOrDefault(l => l.ProductId == productId);
            if (line == null)
                throw new DomainException("Product not found in the invoice.", "INVOICE_LINE_NOT_FOUND", new { productId });
            _lines.Remove(line);
            RecalculateTotal();
        }

        public void UpdateLineQuantity(Guid productId, int newQuantity)
        {
            var line = _lines.FirstOrDefault(l => l.ProductId == productId);
            if (line == null)
                throw new DomainException("Product not found in the invoice.", "INVOICE_LINE_NOT_FOUND", new { productId });
            line.UpdateQuantity(newQuantity);
            RecalculateTotal();
        }

        private void RecalculateTotal()
        {
            decimal sum = _lines.Sum(line => line.Price.Amount * line.Quantity);
            Total = new Money(sum, Total.Currency);
        }

        public void MarkAsPaid(DateTime paidAt)
        {
            if (Status != InvoiceStatus.Issued)
                throw new DomainException("Invoice cannot be paid in its current state.", "INVOICE_INVALID_STATE", new { Id, Status });
            PaidAt = paidAt;
            Status = InvoiceStatus.Paid;
            AddDomainEvent(new InvoicePaidEvent(this));
        }

        public void Cancel(string? reason = null)
        {
            if (Status == InvoiceStatus.Paid || Status == InvoiceStatus.Cancelled)
                throw new DomainException("Cannot cancel a paid or already cancelled invoice.", "INVOICE_CANCEL_INVALID_STATE", new { Id, Status });
            Status = InvoiceStatus.Cancelled;
            AddDomainEvent(new InvoiceCancelledEvent(this, reason));
        }

        public override string ToString() =>
            $"Invoice [Id={Id}, CustomerId={CustomerId}, Status={Status}, Total={Total}]";
    }

    public class InvoiceLine : EntityBase
    {
        public Guid ProductId { get; private set; }
        public string ProductName { get; private set; }
        public int Quantity { get; private set; }
        public Money Price { get; private set; }

        public InvoiceLine(Guid productId, string productName, int quantity, Money price)
        {
            if (quantity <= 0)
                throw new DomainException("Quantity must be positive.", "INVOICE_LINE_QUANTITY_INVALID", new { productId, quantity });
            if (price == null)
                throw new DomainException("Price is required.", "INVOICE_LINE_PRICE_REQUIRED", new { productId });
            if (price.Amount < 0)
                throw new DomainException("Price cannot be negative.", "INVOICE_LINE_PRICE_NEGATIVE", new { productId, price.Amount });
            ProductId = productId;
            ProductName = productName?.Trim() ?? throw new DomainException("Product name is required.", "INVOICE_LINE_NAME_REQUIRED", new { productId });
            Quantity = quantity;
            Price = price;
        }

        public void UpdateQuantity(int newQuantity)
        {
            if (newQuantity <= 0)
                throw new DomainException("Quantity must be positive.", "INVOICE_LINE_QUANTITY_INVALID", new { ProductId, newQuantity });
            Quantity = newQuantity;
        }

        public Money GetLineTotal() => Price.Multiply(Quantity);

        public override string ToString() =>
            $"InvoiceLine [ProductId={ProductId}, ProductName={ProductName}, Quantity={Quantity}, Price={Price}]";
    }
}