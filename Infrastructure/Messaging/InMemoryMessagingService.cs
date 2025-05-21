using Core.Interfaces;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infrastructure.Messaging;

public class InMemoryMessagingService : IMessagingService
{
    // destination -> list of handlers
    private readonly ConcurrentDictionary<string, List<Func<object, Task>>> _subscribers = new();

    public Task PublishAsync<T>(string destination, T message, IDictionary<string, object>? customHeaders = null)
    {
        if (_subscribers.TryGetValue(destination, out var handlers))
        {
            var tasks = new List<Task>();
            foreach (var handler in handlers)
            {
                // Fire and forget, but capture tasks for completion
                tasks.Add(handler(message!));
            }
            return Task.WhenAll(tasks);
        }
        return Task.CompletedTask;
    }

    public Task SubscribeAsync<T>(string destination, Func<T, Task> onMessageReceived)
    {
        var handler = new Func<object, Task>(msg => onMessageReceived((T)msg));
        _subscribers.AddOrUpdate(
            destination,
            _ => new List<Func<object, Task>> { handler },
            (_, list) =>
            {
                list.Add(handler);
                return list;
            });
        return Task.CompletedTask;
    }
}