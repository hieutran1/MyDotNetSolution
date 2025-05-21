using System;
using MyDotNetSolution.Core;

namespace Core.Models;

public class Order : IEntity
{
    public Guid Id { get; set; }
    public required string CustomerName { get; set; }
    public decimal TotalAmount { get; set; }
}