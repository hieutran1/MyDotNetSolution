using Application.Shared.Interfaces;
using Application.Shared.Messaging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infrastructure.Messaging;

public class InMemoryMessagingService : IMessagingService
{
    // destination -> list of handlers
    private readonly ConcurrentDictionary<string, List<Func<BaseMessage, Task>>> _subscribers = new();

    public Task PublishAsync(string destination, BaseMessage message, IDictionary<string, object>? headers = null)
    {
        if (_subscribers.TryGetValue(destination, out var handlers))
        {
            var tasks = handlers.Select(handler => handler(message));
            return Task.WhenAll(tasks);
        }
        return Task.CompletedTask;
    }

    public Task SubscribeAsync<T>(string destination, Func<T, Task> handler) where T : BaseMessage
    {
        var wrapper = new Func<BaseMessage, Task>(msg => handler((T)msg));
        _subscribers.AddOrUpdate(
            destination,
            _ => new List<Func<BaseMessage, Task>> { wrapper },
            (_, list) =>
            {
                list.Add(wrapper);
                return list;
            });
        return Task.CompletedTask;
    }

    public Task UnsubscribeAsync(string destination)
    {
        _subscribers.TryRemove(destination, out _);
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
        return Task.FromResult(_subscribers.ContainsKey(destination));
    }

    public Task<IEnumerable<string>> GetAllSubscriptionsAsync()
    {
        return Task.FromResult(_subscribers.Keys.AsEnumerable());
    }

    public Task<int> GetSubscriptionCountAsync()
    {
        return Task.FromResult(_subscribers.Count);
    }

    public Task ClearAllSubscriptionsAsync()
    {
        _subscribers.Clear();
        return Task.CompletedTask;
    }
}