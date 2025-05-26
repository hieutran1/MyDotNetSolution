using Microsoft.AspNetCore.Mvc.Testing;
using MyDotNetSolution.Core.Entities;

namespace API.IntegrationTests;

public class CustomerApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public CustomerApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    // [Fact]
    public async Task PostAndGetCustomer_Works()
    {
        var customer = new Customer { Name = "Integration", Email = "int@example.com" };
        var response = await _client.PostAsJsonAsync("/api/customer", customer);
        response.EnsureSuccessStatusCode();

        var created = await response.Content.ReadFromJsonAsync<Customer>();
        var getResponse = await _client.GetAsync($"/api/customer/{created!.Id}");
        getResponse.EnsureSuccessStatusCode();

        var fetched = await getResponse.Content.ReadFromJsonAsync<Customer>();
        Assert.Equal("Integration", fetched!.Name);
    }
}