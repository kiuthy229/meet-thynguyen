using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MeetThyNguyen.Models
{
    public class Booking
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // Use ObjectId for MongoDB compatibility
        public string? Id { get; set; } // Change type to string to match ObjectId
        public Guid MemberId { get; set; }
        public Guid UserId { get; set; }
        public decimal TicketPrice { get; set; }
        public DateTime AppointmentDate { get; set; }
        public string Status { get; set; } // "pending", "approved", or "cancelled"
        public bool IsPaid { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
