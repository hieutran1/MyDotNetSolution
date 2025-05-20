using Azure.Messaging.ServiceBus;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;

namespace Infrastructure.Messaging
{
    public class AzureServiceBusMessagingService : IMessagingService
    {
        private readonly string _connectionString;

        public AzureServiceBusMessagingService(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task PublishAsync<T>(string queueOrTopic, T message, IDictionary<string, object>? customProperties = null)
        {
            await using var client = new ServiceBusClient(_connectionString);
            var sender = client.CreateSender(queueOrTopic);

            var serializedMessage = JsonSerializer.Serialize(message);
            var serviceBusMessage = new ServiceBusMessage(serializedMessage)
            {
                ContentType = "application/json",
                MessageId = Guid.NewGuid().ToString(),
                CorrelationId = Guid.NewGuid().ToString()
            };

            if (customProperties != null)
            {
                foreach (var prop in customProperties)
                {
                    serviceBusMessage.ApplicationProperties[prop.Key] = prop.Value;
                }
            }

            try
            {
                await sender.SendMessageAsync(serviceBusMessage);
                Console.WriteLine($"Azure Service Bus: Published to '{queueOrTopic}': {serializedMessage}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Azure Service Bus: Error publishing to '{queueOrTopic}': {ex.Message}");
                throw;
            }
        }

        public async Task SubscribeAsync<T>(string queueOrTopic, Func<T, Task> onMessageReceived)
        {
            await using var client = new ServiceBusClient(_connectionString);
            var processor = client.CreateProcessor(queueOrTopic, new ServiceBusProcessorOptions());

            processor.ProcessMessageAsync += async args =>
            {
                var body = args.Message.Body.ToString();
                var message = JsonSerializer.Deserialize<T>(body);
                if (message != null)
                    await onMessageReceived(message);

                await args.CompleteMessageAsync(args.Message);
            };

            processor.ProcessErrorAsync += args =>
            {
                Console.WriteLine($"Azure Service Bus: Error: {args.Exception.Message}");
                return Task.CompletedTask;
            };

            await processor.StartProcessingAsync();
            Console.WriteLine($"Azure Service Bus: Subscribed to '{queueOrTopic}'");
        }
    }
}