using Core.Entities;
using Infrastructure.Services;
using System.Threading.Tasks;
using Xunit;

namespace Core.UnitTests;

/// <summary>
/// Contains unit tests for the <see cref="InMemoryCustomerService"/> class.
/// </summary>
public class InMemoryCustomerServiceTests
{
    [Fact]
    public async Task CreateAndGetCustomer_Works()
    {
        var service = new InMemoryCustomerService();
        var customer = new Customer { Name = "Test", Email = "test@example.com" };

        var created = await service.CreateAsync(customer);
        var fetched = await service.GetByIdAsync(created.Id);

        Assert.NotNull(fetched);
        Assert.Equal("Test", fetched!.Name);
    }
}