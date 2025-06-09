using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MeetThyNguyen.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)] // Use ObjectId for MongoDB compatibility
        public string? Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string? Phone { get; set; }
        public string? Photo { get; set; }
        public string Role { get; set; }
        public string Gender { get; set; }
        public MemberDetails? MemberDetails { get; set; }
        public ClientDetails? ClientDetails { get; set; }
    }

    public class MemberDetails
    {
        public string Bio { get; set; }
        public List<string> TimeSlots { get; set; }
        public List<string> Reviews { get; set; }
        public double AverageRating { get; set; }
        public List<string> Experience { get; set; }
        public decimal Price { get; set; }
    }

    public class ClientDetails
    {
        public List<string>? Appointments { get; set; }
    }
}

