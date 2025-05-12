using System;

namespace MeetThyNguyen.Models
{
    public class Review
    {
        public Guid Id { get; set; }
        public Guid MemberId { get; set; }
        public Guid UserId { get; set; }
        public string ReviewText { get; set; }
        public int Rating { get; set; } // Rating between 1 and 5
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
