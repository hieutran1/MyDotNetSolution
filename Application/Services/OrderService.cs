using Application.Shared.DTOs;
using Application.Shared.Interfaces;
using Application.Shared.Messaging;
using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyDotNetSolution.Core.Shared;

namespace Application.Services;

public class OrderService : IOrderService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly ICacheService _cacheService;
    private readonly IMessagingService _messagingService;
    private readonly DomainEventDispatcher _dispatcher = new();
    private const string CachePrefix = "Order_";
    private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(10);

    public OrderService(IUnitOfWork unitOfWork, ICacheService cacheService, IMessagingService messagingService)
    {
        _unitOfWork = unitOfWork ?? throw new ArgumentNullException(nameof(unitOfWork));
        _cacheService = cacheService ?? throw new ArgumentNullException(nameof(cacheService));
        _messagingService = messagingService ?? throw new ArgumentNullException(nameof(messagingService));
    }

    public async Task<OrderDto?> GetOrderAsync(Guid id)
    {
        var cacheKey = $"{CachePrefix}{id}";
        var cached = await _cacheService.GetAsync<OrderDto>(cacheKey);
        if (cached != null) return cached;

        var order = await _unitOfWork.OrderRepository.GetByIdAsync(id);
        if (order == null) return null;

        var dto = new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        };

        await _cacheService.SetAsync(cacheKey, dto, CacheDuration);
        return dto;
    }

    public async Task<IEnumerable<OrderDto>> GetAllOrdersAsync()
    {
        var orders = await _unitOfWork.OrderRepository.GetAllAsync();
        return orders.Select(order => new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        }).ToList();
    }

    public async Task CreateOrderAsync(OrderDto dto)
    {
        if (dto == null) throw new ArgumentNullException(nameof(dto));

        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = new Order
            {
                Id = dto.Id,
                CustomerName = dto.CustomerName,
                TotalAmount = dto.TotalAmount
            };

            await _unitOfWork.OrderRepository.AddAsync(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Create" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderCreatedMessage
            {
                OrderId = order.Id,
                CustomerName = order.CustomerName,
                TotalAmount = order.TotalAmount
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task UpdateOrderAsync(OrderDto dto)
    {
        if (dto == null) throw new ArgumentNullException(nameof(dto));

        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(dto.Id);
            if (order == null) throw new InvalidOperationException("Order not found.");

            order.CustomerName = dto.CustomerName;
            order.TotalAmount = dto.TotalAmount;

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.SetAsync(cacheKey, dto, CacheDuration);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Update" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderUpdatedMessage
            {
                OrderId = order.Id,
                CustomerName = order.CustomerName,
                TotalAmount = order.TotalAmount
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task DeleteOrderAsync(Guid id)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            await _unitOfWork.OrderRepository.DeleteAsync(id);

            var cacheKey = $"{CachePrefix}{id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", id }, { "Action", "Delete" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderDeletedMessage
            {
                OrderId = id
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task<IEnumerable<OrderDto>> GetOrdersByCustomerAsync(string customerName)
    {
        var orders = await _unitOfWork.OrderRepository.GetOrdersByCustomerAsync(customerName);
        return orders.Select(order => new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        }).ToList();
    }

    public async Task<IEnumerable<OrderDto>> SearchByAmountRangeAsync(decimal minAmount, decimal maxAmount)
    {
        var orders = await _unitOfWork.OrderRepository.SearchByAmountRangeAsync(minAmount, maxAmount);
        return orders.Select(order => new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        }).ToList();
    }

    public async Task<IEnumerable<OrderDto>> GetRecentOrdersAsync(int count)
    {
        var orders = await _unitOfWork.OrderRepository.GetRecentOrdersAsync(count);
        return orders.Select(order => new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        }).ToList();
    }

    public async Task ClearAllOrderCacheAsync(IEnumerable<Guid> orderIds)
    {
        foreach (var id in orderIds)
        {
            var cacheKey = $"{CachePrefix}{id}";
            await _cacheService.RemoveAsync(cacheKey);
        }
    }

    public async Task<bool> ExistsAsync(Guid id)
    {
        return await _unitOfWork.OrderRepository.ExistsAsync(id);
    }

    public async Task<int> CountAsync()
    {
        return await _unitOfWork.OrderRepository.CountAsync();
    }

    public async Task<IEnumerable<OrderDto>> GetPagedAsync(int pageNumber, int pageSize)
    {
        var orders = await _unitOfWork.OrderRepository.GetPagedAsync(pageNumber, pageSize);
        return orders.Select(order => new OrderDto
        {
            Id = order.Id,
            CustomerName = order.CustomerName,
            TotalAmount = order.TotalAmount
        }).ToList();
    }

    public async Task CompleteOrderAsync(Guid orderId, string paymentMethod)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(orderId);
            if (order == null) throw new InvalidOperationException("Order not found.");

            // Mark as paid and fire domain event
            order.MarkAsPaid(DateTime.UtcNow, paymentMethod);

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            // Dispatch domain events
            _dispatcher.DispatchEvents(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Complete" } };
            await _messagingService.PublishAsync("OrderQueue", new
            {
                OrderId = order.Id,
                Status = "Paid",
                PaidAt = order.PaidAt,
                PaymentMethod = order.PaymentMethod
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task MarkOrderAsPaidAsync(Guid orderId, string paymentMethod)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(orderId);
            if (order == null) throw new InvalidOperationException("Order not found.");

            order.MarkAsPaid(DateTime.UtcNow, paymentMethod);

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            // Dispatch domain events
            _dispatcher.DispatchEvents(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Paid" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderPaidMessage
            {
                OrderId = order.Id,
                PaidAt = order.PaidAt ?? DateTime.UtcNow,
                PaymentMethod = order.PaymentMethod
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task MarkOrderAsDeliveredAsync(Guid orderId)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(orderId);
            if (order == null) throw new InvalidOperationException("Order not found.");

            order.MarkAsDelivered(DateTime.UtcNow);

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            // Dispatch domain events
            _dispatcher.DispatchEvents(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Delivered" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderDeliveredMessage
            {
                OrderId = order.Id,
                Status = "Delivered",
                DeliveredAt = order.DeliveredAt
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task CancelOrderAsync(Guid orderId, string? reason = null)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(orderId);
            if (order == null) throw new InvalidOperationException("Order not found.");

            order.Cancel(reason);

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            // Dispatch domain events
            _dispatcher.DispatchEvents(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Cancelled" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderCancelledMessage
            {
                OrderId = order.Id,
                Status = "Cancelled",
                Reason = reason
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }

    public async Task MarkOrderAsShippedAsync(Guid orderId, DateTime shippedAt, string trackingNumber)
    {
        await _unitOfWork.BeginTransactionAsync();
        try
        {
            var order = await _unitOfWork.OrderRepository.GetByIdAsync(orderId);
            if (order == null) throw new InvalidOperationException("Order not found.");

            order.MarkAsShipped(shippedAt, trackingNumber);

            await _unitOfWork.OrderRepository.UpdateAsync(order);

            // Dispatch domain events
            _dispatcher.DispatchEvents(order);

            var cacheKey = $"{CachePrefix}{order.Id}";
            await _cacheService.RemoveAsync(cacheKey);

            var headers = new Dictionary<string, object> { { "OrderId", order.Id }, { "Action", "Shipped" } };
            await _messagingService.PublishAsync("OrderQueue", new OrderShippedMessage
            {
                OrderId = order.Id,
                Status = "Shipped",
                ShippedAt = order.ShippedAt,
                TrackingNumber = order.TrackingNumber
            }, headers);

            await _unitOfWork.CommitTransactionAsync();
        }
        catch
        {
            await _unitOfWork.RollbackTransactionAsync();
            throw;
        }
    }
}