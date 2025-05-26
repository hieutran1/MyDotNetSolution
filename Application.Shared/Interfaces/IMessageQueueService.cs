using System.Threading.Tasks;

namespace Application.Shared.Interfaces;

public interface IMessageQueueService
{
    void SendMessage<T>(T message);
    T ReceiveMessage<T>();
    Task PublishAsync<T>(string topic, T message);
}