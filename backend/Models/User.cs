using System;
using System.Collections.Generic;

namespace MeetThyNguyen.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Photo { get; set; }
        public string Role { get; set; } // "patient" or "admin"
        public string Gender { get; set; } // "male", "female", or "other"
        public string BloodType { get; set; }
        public List<Guid> Appointments { get; set; }
    }
}
