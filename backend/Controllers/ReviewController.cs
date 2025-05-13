using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using MeetThyNguyen.Services;
using System.Threading.Tasks;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        public ReviewController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllReviews()
        {
            var reviews = await _mongoDbService.GetAllAsync<Review>("reviews");
            return Ok(reviews);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetReview(string id)
        {
            var review = await _mongoDbService.GetByIdAsync<Review>("reviews", id);
            if (review == null)
            {
                return NotFound();
            }
            return Ok(review);
        }

        [HttpPost]
        public async Task<IActionResult> CreateReview([FromBody] Review review)
        {
            await _mongoDbService.CreateAsync("reviews", review);
            return CreatedAtAction(nameof(GetReview), new { id = review.Id }, review);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateReview(string id, [FromBody] Review updatedReview)
        {
            var existingReview = await _mongoDbService.GetByIdAsync<Review>("reviews", id);
            if (existingReview == null)
            {
                return NotFound();
            }

            updatedReview.Id = id;
            await _mongoDbService.UpdateAsync("reviews", id, updatedReview);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReview(string id)
        {
            var review = await _mongoDbService.GetByIdAsync<Review>("reviews", id);
            if (review == null)
            {
                return NotFound();
            }
            await _mongoDbService.DeleteAsync<Review>("reviews", id);
            return NoContent();
        }
    }
}