using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MeetThyNguyen.Models
{
    public class Booking
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string? MemberId { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string? UserId { get; set; }
        public decimal TicketPrice { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string? Status { get; set; } // "pending", "approved", or "cancelled"
        public bool IsPaid { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
