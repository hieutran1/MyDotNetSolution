using Core.Entities;
using Microsoft.AspNetCore.Mvc.Testing;

namespace API.IntegrationTests;

public class CustomerApiIntegrationTests : IClassFixture<CustomWebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public CustomerApiIntegrationTests(CustomWebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient(new WebApplicationFactoryClientOptions
        {
            // AllowAutoRedirect = false
        });
    }

    [Fact]
    public async Task Can_Create_And_Get_Customer()
    {
        var customer = new Customer { Name = "Integration", Email = "int@example.com" };
        var postResponse = await _client.PostAsJsonAsync("/api/customer", customer);
        postResponse.EnsureSuccessStatusCode();

        var created = await postResponse.Content.ReadFromJsonAsync<Customer>();
        Assert.NotNull(created);
        Assert.Equal("Integration", created!.Name);

        var getResponse = await _client.GetAsync($"/api/customer/{created.Id}");
        getResponse.EnsureSuccessStatusCode();

        var fetched = await getResponse.Content.ReadFromJsonAsync<Customer>();
        Assert.Equal("Integration", fetched!.Name);
        Assert.Equal("int@example.com", fetched.Email);
    }

    [Fact]
    public async Task GetAll_Returns_Customers()
    {
        var response = await _client.GetAsync("/api/customer");
        response.EnsureSuccessStatusCode();

        var customers = await response.Content.ReadFromJsonAsync<Customer[]>();
        Assert.NotNull(customers);
    }

    [Fact]
    public async Task Delete_Removes_Customer()
    {
        var customer = new Customer { Name = "ToDelete", Email = "del@example.com" };
        var postResponse = await _client.PostAsJsonAsync("/api/customer", customer);
        postResponse.EnsureSuccessStatusCode();

        var created = await postResponse.Content.ReadFromJsonAsync<Customer>();
        Assert.NotNull(created);

        var deleteResponse = await _client.DeleteAsync($"/api/customer/{created!.Id}");
        deleteResponse.EnsureSuccessStatusCode();

        var getResponse = await _client.GetAsync($"/api/customer/{created.Id}");
        Assert.Equal(System.Net.HttpStatusCode.NotFound, getResponse.StatusCode);
    }
}