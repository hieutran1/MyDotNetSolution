using Confluent.Kafka;
using Core.Interfaces;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;

namespace Infrastructure.Messaging
{
    public class KafkaMessagingService : IMessagingService
    {
        private readonly ILogger<KafkaMessagingService> _logger;
        private readonly ProducerConfig _producerConfig;
        private readonly ConsumerConfig _consumerConfig;

        public KafkaMessagingService(ILogger<KafkaMessagingService> logger, string bootstrapServers, string groupId)
        {
            _logger = logger;
            _producerConfig = new ProducerConfig { BootstrapServers = bootstrapServers };
            _consumerConfig = new ConsumerConfig
            {
                BootstrapServers = bootstrapServers,
                GroupId = groupId,
                AutoOffsetReset = AutoOffsetReset.Earliest
            };
        }

        public async Task PublishAsync<T>(string topic, T message, IDictionary<string, object>? customHeaders = null)
        {
            using var producer = new ProducerBuilder<Null, string>(_producerConfig).Build();
            var serializedMessage = JsonSerializer.Serialize(message);

            var kafkaMessage = new Message<Null, string>
            {
                Value = serializedMessage,
                Headers = new Headers()
            };

            if (customHeaders != null)
            {
                foreach (var header in customHeaders)
                {
                    kafkaMessage.Headers.Add(header.Key, System.Text.Encoding.UTF8.GetBytes(header.Value.ToString() ?? ""));
                }
            }

            try
            {
                var result = await producer.ProduceAsync(topic, kafkaMessage);
                _logger.LogInformation($"Kafka: Published to '{topic}' (Partition: {result.Partition}, Offset: {result.Offset}): {serializedMessage}");
            }
            catch (ProduceException<Null, string> ex)
            {
                _logger.LogError(ex, $"Kafka: Error publishing to '{topic}': {ex.Error.Reason}");
                throw;
            }
        }

        public async Task SubscribeAsync<T>(string topic, Func<T, Task> onMessageReceived)
        {
            using var consumer = new ConsumerBuilder<Ignore, string>(_consumerConfig).Build();
            consumer.Subscribe(topic);

            var cts = new CancellationTokenSource();
            _logger.LogInformation($"Kafka: Subscribed to '{topic}'");

            try
            {
                while (!cts.Token.IsCancellationRequested)
                {
                    var consumeResult = consumer.Consume(cts.Token);
                    var message = JsonSerializer.Deserialize<T>(consumeResult.Message.Value);
                    if (message != null)
                        await onMessageReceived(message);
                }
            }
            catch (OperationCanceledException)
            {
                consumer.Close();
            }
        }
    }
}