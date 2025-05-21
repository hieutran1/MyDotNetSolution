using System;
using MyDotNetSolution.Core;

namespace Core.Entities;

public class Customer : IEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
}