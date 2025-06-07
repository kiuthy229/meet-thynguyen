using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using MeetThyNguyen.Services;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        public UserController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _mongoDbService.GetAllAsync<User>("users");
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(string id)
        {
            if (!ObjectId.TryParse(id, out var objectId))
            {
                return BadRequest("Invalid ID format.");
            }

            Console.WriteLine($"Fetching user with ID: {objectId}");
            var user = await _mongoDbService.GetByIdAsync<User>("users", objectId.ToString());
            if (user == null)
            {
                Console.WriteLine("User not found.");
                return NotFound();
            }

            Console.WriteLine($"User fetched: {user}");
            return Ok(user);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            await _mongoDbService.CreateAsync("users", user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(string id, [FromBody] User updatedUser)
        {
            if (!ObjectId.TryParse(id, out var objectId))
            {
                return BadRequest("Invalid ID format.");
            }

            var existingUser = await _mongoDbService.GetByIdAsync<User>("users", objectId.ToString());
            if (existingUser == null)
            {
                return NotFound();
            }

            updatedUser.Id = objectId.ToString();
            await _mongoDbService.UpdateAsync("users", objectId.ToString(), updatedUser);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            if (!ObjectId.TryParse(id, out var objectId))
            {
                return BadRequest("Invalid ID format.");
            }

            var user = await _mongoDbService.GetByIdAsync<User>("users", objectId.ToString());
            if (user == null)
            {
                return NotFound();
            }
            await _mongoDbService.DeleteAsync<User>("users", objectId.ToString());
            return NoContent();
        }
    }
}