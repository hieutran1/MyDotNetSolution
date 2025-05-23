using System;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using Application.Services;
using Core.Entities;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Caching;
using Infrastructure.Data;
using Infrastructure.Messaging;
using Infrastructure.Repositories;
using Infrastructure.Services;
using Infrastructure.UnitOfWork;
using Microsoft.AspNetCore.Builder;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMemoryCache();
builder.Services.AddScoped(typeof(IRepository<>), typeof(CachedRepository<>));
builder.Services.AddScoped<IRepository<Order>, OrderRepository>();
builder.Services.AddSingleton<ICacheService, InMemoryCacheService>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
// Register the messaging service
builder.Services.AddSingleton<IMessagingService, InMemoryMessagingService>();

// For Kafka
// builder.Services.AddSingleton<IMessagingService>(sp =>
//     new KafkaMessagingService("localhost:9092", "my-group-id"));

// For Azure Service Bus
// builder.Services.AddSingleton<IMessagingService>(sp =>
//     new AzureServiceBusMessagingService("YourAzureServiceBusConnectionString"));

builder.Services.AddScoped<OrderService>();

builder.Services.AddSingleton<IRepository<Customer>>(sp =>
    new InMemoryRepository<Customer>(c => c.Id));

builder.Services.AddSingleton<ICustomerService, InMemoryCustomerService>();

// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Create open SqliteConnection so EF won't automatically close it.
builder.Services.AddSingleton<DbConnection>(container =>
{
    var connection = new SqliteConnection("DataSource=:memory:");
    connection.Open();

    return connection;
});

builder.Services.AddDbContext<AppDbContext>((container, options) =>
{
    var connection = container.GetRequiredService<DbConnection>();
    options.UseSqlite(connection);
});

builder.Services.AddScoped<ICustomerService, EfCustomerRepository>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddLogging(builder => builder.AddConsole());

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

// Subscribe to the "OrderQueue" after building the app
var messagingService = app.Services.GetRequiredService<IMessagingService>();
await messagingService.SubscribeAsync<Order>("OrderQueue", async order =>
{
    Console.WriteLine($"Received order: {order.Id} for {order.CustomerName}");
    // You can add additional logic here, e.g., update status, notify, etc.
    await Task.CompletedTask;
});

using (var scope = app.Services.CreateScope())
{
    var container = scope.ServiceProvider;
    var db = container.GetRequiredService<AppDbContext>();

    db.Database.EnsureCreated();

    if (!db.Customers.Any())
    {
        try
        {
            db.Initialize();
        }
        catch (Exception ex)
        {
            var logger = container.GetRequiredService<ILogger<Program>>();
            logger.LogError(ex, "An error occurred seeding the database. Error: {Message}", ex.Message);
        }
    }
}

app.Run();

// Expose Program for test project
public partial class Program { }
