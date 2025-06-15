using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Shared.Interfaces;
using Application.Shared.Messaging;

namespace Infrastructure.Messaging
{
    public class MessagingService : IMessagingService
    {
        private readonly ConcurrentDictionary<string, Delegate> _subscriptions = new();

        public Task PublishAsync(string destination, BaseMessage message, IDictionary<string, object>? headers = null)
        {
            // Simulate publishing by invoking the handler if subscribed
            if (_subscriptions.TryGetValue(destination, out var handler))
            {
                if (handler is Func<BaseMessage, Task> baseHandler)
                    return baseHandler(message);

                var messageType = message.GetType();
                var genericHandler = handler.GetType().GetMethod("Invoke");
                if (genericHandler != null)
                    return (Task)genericHandler.Invoke(handler, new object[] { message })!;
            }
            return Task.CompletedTask;
        }

        public Task SubscribeAsync<T>(string destination, Func<T, Task> handler) where T : BaseMessage
        {
            _subscriptions[destination] = handler;
            return Task.CompletedTask;
        }

        public Task UnsubscribeAsync(string destination)
        {
            _subscriptions.TryRemove(destination, out _);
            return Task.CompletedTask;
        }

        public async Task PublishBatchAsync(string destination, IEnumerable<BaseMessage> messages, IDictionary<string, object>? headers = null)
        {
            foreach (var message in messages)
            {
                await PublishAsync(destination, message, headers);
            }
        }

        public Task<bool> IsSubscribedAsync(string destination)
        {
            return Task.FromResult(_subscriptions.ContainsKey(destination));
        }

        // New enhancements

        public Task<IEnumerable<string>> GetAllSubscriptionsAsync()
        {
            return Task.FromResult(_subscriptions.Keys.AsEnumerable());
        }

        public Task<int> GetSubscriptionCountAsync()
        {
            return Task.FromResult(_subscriptions.Count);
        }

        public Task ClearAllSubscriptionsAsync()
        {
            _subscriptions.Clear();
            return Task.CompletedTask;
        }
    }
}