using System;
using MyDotNetSolution.Core.Shared;

namespace MyDotNetSolution.Core.Entities
{
    public class OrderItem : EntityBase
    {
        public Guid ProductId { get; private set; }
        public string ProductName { get; private set; } = string.Empty;
        public int Quantity { get; private set; }
        public decimal UnitPrice { get; private set; }

        public OrderItem(Guid productId, string productName, int quantity, decimal unitPrice)
        {
            if (quantity <= 0)
                throw new DomainException("Quantity must be positive.", "ORDER_ITEM_QUANTITY_INVALID", new { productId, quantity });
            if (unitPrice < 0)
                throw new DomainException("Unit price cannot be negative.", "ORDER_ITEM_UNITPRICE_NEGATIVE", new { productId, unitPrice });
            ProductId = productId;
            ProductName = productName ?? throw new DomainException("Product name is required.", "ORDER_ITEM_NAME_REQUIRED", new { productId });
            Quantity = quantity;
            UnitPrice = unitPrice;
        }

        public void UpdateQuantity(int newQuantity)
        {
            if (newQuantity <= 0)
                throw new DomainException("Quantity must be positive.", "ORDER_ITEM_QUANTITY_INVALID", new { ProductId, newQuantity });
            Quantity = newQuantity;
        }

        public decimal GetTotal() => UnitPrice * Quantity;

        public override string ToString()
        {
            return $"OrderItem [ProductId={ProductId}, ProductName={ProductName}, Quantity={Quantity}, UnitPrice={UnitPrice}]";
        }
    }
}