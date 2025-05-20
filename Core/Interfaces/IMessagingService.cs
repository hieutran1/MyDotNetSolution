using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IMessagingService
    {
        Task PublishAsync<T>(string destination, T message, IDictionary<string, object>? customHeaders = null);
        Task SubscribeAsync<T>(string destination, Func<T, Task> onMessageReceived);
    }
}