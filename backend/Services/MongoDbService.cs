using MeetThyNguyen.Models;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace MeetThyNguyen.Services;
public class MongoDbService
{
    private readonly IMongoDatabase _database;
    private readonly MongoDbSettings _settings;
    private readonly ILogger<MongoDbService> _logger;

    public MongoDbService(IOptions<MongoDbSettings> mongoDbSettings, ILogger<MongoDbService> logger)
    {
        _settings = mongoDbSettings.Value;
        _logger = logger;

        try
        {
            MongoClient client = new MongoClient(_settings.ConnectionURI);
            _database = client.GetDatabase(_settings.DatabaseName);
            _logger.LogInformation("Connected to MongoDB successfully.");
        }
        catch (Exception ex)
        {
            _logger.LogError("Failed to connect to MongoDB: {Message}", ex.Message);
            throw;
        }
    }

    public IMongoCollection<T> GetCollection<T>(string collectionKey)
    {
        try
        {
            var collectionName = collectionKey switch
            {
                "bookings" => _settings.BookingsCollectionName,
                "users" => _settings.UsersCollectionName,
                "reviews" => _settings.ReviewsCollectionName,
                "members" => _settings.MembersCollectionName,
                _ => throw new ArgumentException($"Invalid collection key: {collectionKey}")
            };

            _logger.LogInformation("Retrieved collection: {CollectionName}", collectionName);
            return _database.GetCollection<T>(collectionName);
        }
        catch (Exception ex)
        {
            _logger.LogError("Error retrieving collection: {Message}", ex.Message);
            throw;
        }
    }

    public async Task<List<T>> GetAllAsync<T>(string collectionKey)
    {
        try
        {
            var collection = GetCollection<T>(collectionKey);
            _logger.LogInformation("Fetching all documents from collection: {CollectionKey}", collectionKey);
            return await collection.Find(new BsonDocument()).ToListAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError("Error fetching all documents: {Message}", ex.Message);
            throw;
        }
    }

    public async Task<T?> GetByIdAsync<T>(string collectionKey, string id)
    {
        try
        {
            var collection = GetCollection<T>(collectionKey);
            _logger.LogInformation("Fetching document with ID: {Id} from collection: {CollectionKey}", id, collectionKey);
            return await collection.Find(Builders<T>.Filter.Eq("_id", id)).FirstOrDefaultAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError("Error fetching document by ID: {Message}", ex.Message);
            throw;
        }
    }

    public async Task CreateAsync<T>(string collectionKey, T document)
    {
        try
        {
            var collection = GetCollection<T>(collectionKey);
            _logger.LogInformation("Inserting document into collection: {CollectionKey}", collectionKey);
            await collection.InsertOneAsync(document);
        }
        catch (Exception ex)
        {
            _logger.LogError("Error inserting document: {Message}", ex.Message);
            throw;
        }
    }

    public async Task UpdateAsync<T>(string collectionKey, string id, T updatedDocument)
    {
        try
        {
            var collection = GetCollection<T>(collectionKey);
            _logger.LogInformation("Updating document with ID: {Id} in collection: {CollectionKey}", id, collectionKey);
            await collection.ReplaceOneAsync(Builders<T>.Filter.Eq("_id", id), updatedDocument);
        }
        catch (Exception ex)
        {
            _logger.LogError("Error updating document: {Message}", ex.Message);
            throw;
        }
    }

    public async Task DeleteAsync<T>(string collectionKey, string id)
    {
        try
        {
            var collection = GetCollection<T>(collectionKey);
            _logger.LogInformation("Deleting document with ID: {Id} from collection: {CollectionKey}", id, collectionKey);
            await collection.DeleteOneAsync(Builders<T>.Filter.Eq("_id", id));
        }
        catch (Exception ex)
        {
            _logger.LogError("Error deleting document: {Message}", ex.Message);
            throw;
        }
    }
}
