using Application.Services;
using Core.Interfaces;
using Core.Models;
using Infrastructure.Caching;
using Infrastructure.Messaging;
using Infrastructure.Repositories;
using Infrastructure.UnitOfWork;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddMemoryCache();
builder.Services.AddScoped(typeof(IRepository<>), typeof(CachedRepository<>));
builder.Services.AddScoped<IRepository<Order>, OrderRepository>();
builder.Services.AddScoped<ICacheService, CacheService>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();

// For Kafka
builder.Services.AddSingleton<IMessagingService>(sp =>
    new KafkaMessagingService("localhost:9092", "my-group-id"));

// For Azure Service Bus
builder.Services.AddSingleton<IMessagingService>(sp =>
    new AzureServiceBusMessagingService("YourAzureServiceBusConnectionString"));

builder.Services.AddScoped<OrderService>();

var app = builder.Build();

// Subscribe to the "OrderQueue"
var orderService = app.Services.GetRequiredService<OrderService>();
var messagingService = app.Services.GetRequiredService<IMessagingService>();

app.Run();