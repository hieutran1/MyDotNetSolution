using Microsoft.AspNetCore.Mvc;
using Application.Shared.DTOs;
using Application.Shared.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MyDotNetSolution.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{id:guid}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var order = await _orderService.GetOrderAsync(id);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var orders = await _orderService.GetAllOrdersAsync();
            return Ok(orders);
        }

        [HttpGet("paged")]
        public async Task<IActionResult> GetPaged([FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 10)
        {
            var orders = await _orderService.GetPagedAsync(pageNumber, pageSize);
            return Ok(orders);
        }

        [HttpGet("customer/{customerName}")]
        public async Task<IActionResult> GetByCustomer(string customerName)
        {
            var orders = await _orderService.GetOrdersByCustomerAsync(customerName);
            return Ok(orders);
        }

        [HttpGet("amount-range")]
        public async Task<IActionResult> GetByAmountRange([FromQuery] decimal min, [FromQuery] decimal max)
        {
            var orders = await _orderService.SearchByAmountRangeAsync(min, max);
            return Ok(orders);
        }

        [HttpGet("recent")]
        public async Task<IActionResult> GetRecent([FromQuery] int count = 5)
        {
            var orders = await _orderService.GetRecentOrdersAsync(count);
            return Ok(orders);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OrderDto dto)
        {
            await _orderService.CreateOrderAsync(dto);
            return CreatedAtAction(nameof(Get), new { id = dto.Id }, dto);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> Update(Guid id, [FromBody] OrderDto dto)
        {
            if (id != dto.Id) return BadRequest();
            await _orderService.UpdateOrderAsync(dto);
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            await _orderService.DeleteOrderAsync(id);
            return NoContent();
        }

        [HttpPost("{id:guid}/pay")]
        public async Task<IActionResult> MarkAsPaid(Guid id, [FromBody] string paymentMethod)
        {
            await _orderService.MarkOrderAsPaidAsync(id, paymentMethod);
            return NoContent();
        }

        [HttpPost("{id:guid}/deliver")]
        public async Task<IActionResult> MarkAsDelivered(Guid id)
        {
            await _orderService.MarkOrderAsDeliveredAsync(id);
            return NoContent();
        }

        [HttpPost("{id:guid}/cancel")]
        public async Task<IActionResult> Cancel(Guid id, [FromBody] string? reason)
        {
            await _orderService.CancelOrderAsync(id, reason);
            return NoContent();
        }

        [HttpPost("{id:guid}/complete")]
        public async Task<IActionResult> Complete(Guid id, [FromBody] string paymentMethod)
        {
            await _orderService.CompleteOrderAsync(id, paymentMethod);
            return NoContent();
        }

        [HttpGet("{id:guid}/exists")]
        public async Task<IActionResult> Exists(Guid id)
        {
            var exists = await _orderService.ExistsAsync(id);
            return Ok(exists);
        }

        [HttpGet("count")]
        public async Task<IActionResult> Count()
        {
            var count = await _orderService.CountAsync();
            return Ok(count);
        }
    }
}