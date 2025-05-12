using System;
using System.Collections.Generic;

namespace MeetThyNguyen.Models
{
    public class Member
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Photo { get; set; }
        public decimal? TicketPrice { get; set; }
        public string Role { get; set; }
        public string Specialization { get; set; }
        public List<string> Qualifications { get; set; }
        public List<string> Experiences { get; set; }
        public string Bio { get; set; }
        public string About { get; set; }
        public List<string> TimeSlots { get; set; }
        public List<Guid> Reviews { get; set; }
        public double AverageRating { get; set; }
        public int TotalRating { get; set; }
        public string IsApproved { get; set; } // "pending", "approved", or "cancelled"
        public List<Guid> Appointments { get; set; }
    }
}
