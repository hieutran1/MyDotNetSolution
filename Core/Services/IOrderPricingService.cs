using MyDotNetSolution.Core.Entities;
using MyDotNetSolution.Core.Shared.ValueObjects;

namespace MyDotNetSolution.Core.Services
{
    public interface IOrderPricingService
    {
        Money CalculateTotal(Order order);
    }
}