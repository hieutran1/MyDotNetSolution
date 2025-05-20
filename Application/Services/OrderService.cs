using Application.DTOs;
using Core.Interfaces;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Services
{
    public class OrderService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICacheService _cacheService;
        private readonly IMessagingService _messagingService;
        private static readonly TimeSpan CacheDuration = TimeSpan.FromMinutes(10);

        public OrderService(IUnitOfWork unitOfWork, ICacheService cacheService, IMessagingService messagingService)
        {
            _unitOfWork = unitOfWork;
            _cacheService = cacheService;
            _messagingService = messagingService;
        }

        public async Task<OrderDto?> GetOrderAsync(int id)
        {
            var cacheKey = $"Order_{id}";
            var cached = await _cacheService.GetAsync<OrderDto>(cacheKey);
            if (cached != null) return cached;

            var order = await _unitOfWork.Orders.GetByIdAsync(id);
            if (order == null) return null;

            var dto = new OrderDto { Id = order.Id, CustomerName = order.CustomerName, TotalAmount = order.TotalAmount };
            await _cacheService.SetAsync(cacheKey, dto, CacheDuration);
            return dto;
        }

        public async Task CreateOrderAsync(OrderDto dto)
        {
            await _unitOfWork.BeginTransactionAsync();
            try
            {
                var order = new Core.Models.Order { Id = dto.Id, CustomerName = dto.CustomerName, TotalAmount = dto.TotalAmount };
                await _unitOfWork.Orders.AddAsync(order);

                // Invalidate cache
                await _cacheService.RemoveAsync($"Order_{order.Id}");

                // Publish message
                var headers = new Dictionary<string, object> { { "OrderId", order.Id } };
                await _messagingService.PublishAsync("OrderQueue", order, headers);

                await _unitOfWork.CommitTransactionAsync();
            }
            catch
            {
                await _unitOfWork.RollbackTransactionAsync();
                throw;
            }
        }
    }
}