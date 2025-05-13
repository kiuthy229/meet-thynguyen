using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MeetThyNguyen.Models
{
    public class Review
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // Use ObjectId for MongoDB compatibility
        public string? Id { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string MemberId { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }
        public string ReviewText { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
