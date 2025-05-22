using Core.Entities;
using Infrastructure.Services;

public class InMemoryCustomerServiceAdvancedTests
{
    [Fact]
    public async Task Update_NonExistentCustomer_AddsCustomer()
    {
        var service = new InMemoryCustomerService();
        var customer = new Customer { Id = Guid.NewGuid(), Name = "New", Email = "new@example.com" };

        await service.UpdateAsync(customer);
        var fetched = await service.GetByIdAsync(customer.Id);

        Assert.NotNull(fetched);
        Assert.Equal("New", fetched!.Name);
    }

    [Fact]
    public async Task Delete_RemovesCustomer()
    {
        var service = new InMemoryCustomerService();
        var customer = new Customer { Name = "ToDelete", Email = "del@example.com" };
        var created = await service.CreateAsync(customer);

        await service.DeleteAsync(created.Id);
        var fetched = await service.GetByIdAsync(created.Id);

        Assert.Null(fetched);
    }

    [Fact]
    public async Task GetAllAsync_ReturnsAllCustomers()
    {
        var service = new InMemoryCustomerService();
        await service.CreateAsync(new Customer { Name = "A", Email = "a@example.com" });
        await service.CreateAsync(new Customer { Name = "B", Email = "b@example.com" });

        var all = await service.GetAllAsync();

        Assert.Equal(2, all.Count());
        Assert.Contains(all, c => c.Name == "A");
        Assert.Contains(all, c => c.Name == "B");
    }

    [Fact]
    public async Task CreateAsync_AssignsUniqueIds()
    {
        var service = new InMemoryCustomerService();
        var c1 = await service.CreateAsync(new Customer { Name = "X", Email = "x@example.com" });
        var c2 = await service.CreateAsync(new Customer { Name = "Y", Email = "y@example.com" });

        Assert.NotEqual(c1.Id, c2.Id);
    }

    [Fact]
    public async Task GetByIdAsync_ReturnsNullForMissingCustomer()
    {
        var service = new InMemoryCustomerService();
        var result = await service.GetByIdAsync(Guid.NewGuid());
        Assert.Null(result);
    }
}