namespace Application.DTOs
{
    public class OrderDto
    {
        public int Id { get; set; }
        public string CustomerName { get; set; } = default!;
        public decimal TotalAmount { get; set; }
    }
}