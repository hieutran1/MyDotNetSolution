using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Shared.Messaging;

namespace Application.Shared.Interfaces
{
    public interface IMessagingService
    {
        Task PublishAsync(string destination, BaseMessage message, IDictionary<string, object>? headers = null);

        Task SubscribeAsync<T>(string destination, Func<T, Task> handler) where T : BaseMessage;

        // Enhancements
        Task UnsubscribeAsync(string destination);
        Task PublishBatchAsync(string destination, IEnumerable<BaseMessage> messages, IDictionary<string, object>? headers = null);
        Task<bool> IsSubscribedAsync(string destination);
    }
}