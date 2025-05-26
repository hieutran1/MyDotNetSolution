namespace MyDotNetSolution.Core.Shared.Enums
{
    /// <summary>
    /// Represents the status of an order.
    /// </summary>
    public enum OrderStatus
    {
        Created,
        Paid,
        Shipped,
        Delivered,
        Cancelled
    }
}