using System;
using System.Collections.Generic;
using System.Linq;
using MyDotNetSolution.Core.Shared;
using MyDotNetSolution.Core.Shared.Enums;
using MyDotNetSolution.Core.Events;

namespace MyDotNetSolution.Core.Entities
{
    public class Order : AggregateRootBase
    {
        public Guid CustomerId { get; private set; }
        public OrderStatus Status { get; private set; }
        public string Currency { get; private set; }
        private readonly List<OrderItem> _items = new();
        public IReadOnlyCollection<OrderItem> Items => _items.AsReadOnly();
        public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
        public DateTime? PaidAt { get; private set; }
        public DateTime? DeliveredAt { get; private set; }
        public DateTime? ShippedAt { get; private set; }
        public string? TrackingNumber { get; private set; }
        public decimal TotalAmount { get; private set; }
        public string? PaymentMethod { get; private set; }

        public Order(Guid customerId, string currency)
        {
            CustomerId = customerId;
            Currency = currency ?? throw new DomainException("Currency is required.", "ORDER_CURRENCY_REQUIRED");
            Status = OrderStatus.Created;
        }

        public void AddItem(OrderItem item)
        {
            if (item == null)
                throw new DomainException("Order item cannot be null.", "ORDER_ITEM_NULL");
            if (_items.Any(i => i.ProductId == item.ProductId))
                throw new DomainException("Product already exists in the order.", "ORDER_ITEM_DUPLICATE", new { item.ProductId });
            if (item.UnitPrice < 0)
                throw new DomainException("Unit price cannot be negative.", "ORDER_ITEM_UNITPRICE_NEGATIVE", new { item.ProductId, item.UnitPrice });
            if (item.Quantity <= 0)
                throw new DomainException("Quantity must be positive.", "ORDER_ITEM_QUANTITY_INVALID", new { item.ProductId, item.Quantity });
            _items.Add(item);
            RecalculateTotal();
        }

        public void RemoveItem(Guid productId)
        {
            var item = _items.FirstOrDefault(i => i.ProductId == productId);
            if (item == null)
                throw new DomainException("Product not found in the order.", "ORDER_ITEM_NOT_FOUND", new { productId });
            _items.Remove(item);
            RecalculateTotal();
        }

        public void UpdateItemQuantity(Guid productId, int newQuantity)
        {
            var item = _items.FirstOrDefault(i => i.ProductId == productId);
            if (item == null)
                throw new DomainException("Product not found in the order.", "ORDER_ITEM_NOT_FOUND", new { productId });
            if (newQuantity <= 0)
                throw new DomainException("Quantity must be positive.", "ORDER_ITEM_QUANTITY_INVALID", new { productId, newQuantity });
            item.UpdateQuantity(newQuantity);
            RecalculateTotal();
        }

        private void RecalculateTotal()
        {
            TotalAmount = _items.Sum(item => item.UnitPrice * item.Quantity);
        }

        public void MarkAsPaid(DateTime paidAt, string paymentMethod)
        {
            if (Status != OrderStatus.Created)
                throw new DomainException("Order cannot be paid in its current state.", "ORDER_INVALID_STATE", new { Id, Status });
            PaidAt = paidAt;
            PaymentMethod = paymentMethod;
            Status = OrderStatus.Paid;
            AddDomainEvent(new OrderPaidEvent(this));
        }

        public void MarkAsDelivered(DateTime deliveredAt)
        {
            if (Status != OrderStatus.Paid && Status != OrderStatus.Shipped)
                throw new DomainException("Order must be paid or shipped before delivery.", "ORDER_DELIVERY_INVALID_STATE", new { Id, Status });
            DeliveredAt = deliveredAt;
            Status = OrderStatus.Delivered;
            AddDomainEvent(new OrderDeliveredEvent(this));
        }

        public void MarkAsShipped(DateTime shippedAt, string trackingNumber)
        {
            if (Status != OrderStatus.Paid)
                throw new DomainException("Order must be paid before shipping.", "ORDER_SHIP_INVALID_STATE", new { Id, Status });
            ShippedAt = shippedAt;
            TrackingNumber = trackingNumber;
            Status = OrderStatus.Shipped;
            AddDomainEvent(new OrderShippedEvent(this));
        }

        public void Cancel(string? reason = null)
        {
            if (Status == OrderStatus.Delivered || Status == OrderStatus.Cancelled)
                throw new DomainException("Cannot cancel a delivered or already cancelled order.", "ORDER_CANCEL_INVALID_STATE", new { Id, Status });
            Status = OrderStatus.Cancelled;
            AddDomainEvent(new OrderCancelledEvent(this, reason));
        }

        public override string ToString()
        {
            return $"Order [Id={Id}, CustomerId={CustomerId}, Status={Status}, TotalAmount={TotalAmount} {Currency}]";
        }
    }
}
