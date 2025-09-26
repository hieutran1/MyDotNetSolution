using MyDotNetSolution.Core.Shared;
using System;

namespace MyDotNetSolution.Core.Entities;
public class Language: IEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string IsoCode { get; set; } = null!;
}
