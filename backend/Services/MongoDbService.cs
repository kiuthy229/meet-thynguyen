using MeetThyNguyen.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MeetThyNguyen.Services;
public class MongoDbService
{
  private readonly IMongoCollection<Booking> _bookingsCollection;

  public MongoDbService(IOptions<MongoDbSettings> mongoDbSettings)
  {
    MongoClient mongoClient = new MongoClient(mongoDbSettings.Value.ConnectionURI);
    IMongoDatabase mongoDatabase = mongoClient.GetDatabase(mongoDbSettings.Value.DatabaseName);
    _bookingsCollection = mongoDatabase.GetCollection<Booking>(mongoDbSettings.Value.BookingsCollectionName);
  }

  public async Task CreateAsync(Booking booking)
  {
    await _bookingsCollection.InsertOneAsync(booking);
    return;
  }

public async Task<List<Booking>> GetAllAsync()
  {
    return await _bookingsCollection.Find(new BsonDocument()).ToListAsync();
  }

  public async Task<Booking> GetByIdAsync(string id)
  {
    return await _bookingsCollection.Find(b => b.Id == id).FirstOrDefaultAsync();
  }

  public async Task UpdateAsync(string id, Booking booking)
  {
    await _bookingsCollection.ReplaceOneAsync(b => b.Id == id, booking);
    return;
  }

  public async Task DeleteAsync(string id)
  {
    await _bookingsCollection.DeleteOneAsync(b => b.Id == id);
    return;
  }
}
