namespace MeetThyNguyen.Models
{
  public class MongoDbSettings
  {
    public string ConnectionURI { get; set; }
    public string DatabaseName { get; set; }
    public string BookingsCollectionName { get; set; }
    public string UsersCollectionName { get; set; }
    public string ReviewsCollectionName { get; set; }
  }
}