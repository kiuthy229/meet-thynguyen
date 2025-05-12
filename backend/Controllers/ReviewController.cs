using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private static List<Review> reviews = new List<Review>();

        [HttpGet]
        public ActionResult<IEnumerable<Review>> GetAllReviews()
        {
            return Ok(reviews);
        }

        [HttpGet("{id}")]
        public ActionResult<Review> GetReview(Guid id)
        {
            var review = reviews.FirstOrDefault(r => r.Id == id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }

        [HttpPost]
        public ActionResult<Review> CreateReview([FromBody] Review review)
        {
            review.Id = Guid.NewGuid();
            review.CreatedAt = DateTime.UtcNow;
            review.UpdatedAt = DateTime.UtcNow;
            reviews.Add(review);
            return CreatedAtAction(nameof(GetReview), new { id = review.Id }, review);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateReview(Guid id, [FromBody] Review updatedReview)
        {
            var review = reviews.FirstOrDefault(r => r.Id == id);
            if (review == null)
            {
                return NotFound();
            }

            // Update review properties
            review.ReviewText = updatedReview.ReviewText;
            review.Rating = updatedReview.Rating;
            review.UpdatedAt = DateTime.UtcNow;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteReview(Guid id)
        {
            var review = reviews.FirstOrDefault(r => r.Id == id);
            if (review == null)
            {
                return NotFound();
            }
            reviews.Remove(review);
            return NoContent();
        }
    }
}