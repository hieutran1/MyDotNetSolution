using Application.Shared.DTOs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Shared.Interfaces
{
    public interface IOrderService
    {
        Task<OrderDto?> GetOrderAsync(Guid id);
        Task<IEnumerable<OrderDto>> GetAllOrdersAsync();
        Task CreateOrderAsync(OrderDto dto);
        Task UpdateOrderAsync(OrderDto dto);
        Task DeleteOrderAsync(Guid id);

        Task<IEnumerable<OrderDto>> GetOrdersByCustomerAsync(string customerName);
        Task<IEnumerable<OrderDto>> SearchByAmountRangeAsync(decimal minAmount, decimal maxAmount);
        Task<IEnumerable<OrderDto>> GetRecentOrdersAsync(int count);
        Task ClearAllOrderCacheAsync(IEnumerable<Guid> orderIds);
        Task<bool> ExistsAsync(Guid id);
        Task<int> CountAsync();
        Task<IEnumerable<OrderDto>> GetPagedAsync(int pageNumber, int pageSize);

        Task CompleteOrderAsync(Guid orderId, string paymentMethod);
        Task MarkOrderAsPaidAsync(Guid orderId, string paymentMethod);
        Task MarkOrderAsDeliveredAsync(Guid orderId);
        Task CancelOrderAsync(Guid orderId, string? reason = null);
    }
}