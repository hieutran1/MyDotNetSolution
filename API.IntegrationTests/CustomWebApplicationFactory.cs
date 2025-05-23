using System.Data.Common;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace API.IntegrationTests;

public class CustomWebApplicationFactory<TProgram>
    : WebApplicationFactory<TProgram> where TProgram : class
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // var dbContextDescriptor = services.SingleOrDefault(
            //     d => d.ServiceType ==
            //         typeof(IDbContextOptionsConfiguration<AppDbContext>));

            // services.Remove(dbContextDescriptor!);

            // var dbConnectionDescriptor = services.SingleOrDefault(
            //     d => d.ServiceType ==
            //         typeof(DbConnection));

            // services.Remove(dbConnectionDescriptor!);

            // // Create open SqliteConnection so EF won't automatically close it.
            // services.AddSingleton<DbConnection>(container =>
            // {
            //     var connection = new SqliteConnection("DataSource=:memory:");
            //     connection.Open();

            //     return connection;
            // });

            // services.AddDbContext<AppDbContext>((container, options) =>
            // {
            //     var connection = container.GetRequiredService<DbConnection>();
            //     options.UseSqlite(connection);
            // });

        });

        // builder.UseEnvironment("Development");

        builder.Configure(options =>
        {
            // using var scope = options.ApplicationServices.CreateScope();
            // var container = scope.ServiceProvider;
            // var db = container.GetRequiredService<AppDbContext>();
            // var logger = container.GetRequiredService<ILogger<Program>>();

            // logger.LogInformation("Start migration...");
            // db.Database.EnsureCreated();

            // if (!db.Customers.Any())
            // {
            //     try
            //     {
            //         db.Initialize();
            //     }
            //     catch (Exception ex)
            //     {

            //         logger.LogError(ex, "An error occurred seeding the database. Error: {Message}", ex.Message);
            //     }
            // }
            // logger.LogInformation("Ended migration.");
        });
    }

}