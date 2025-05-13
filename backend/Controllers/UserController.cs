using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using MeetThyNguyen.Services;
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
            var user = await _mongoDbService.GetByIdAsync<User>("users", id);
            if (user == null)
            {
                return NotFound();
            }
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
            var existingUser = await _mongoDbService.GetByIdAsync<User>("users", id);
            if (existingUser == null)
            {
                return NotFound();
            }

            updatedUser.Id = id;
            await _mongoDbService.UpdateAsync("users", id, updatedUser);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(string id)
        {
            var user = await _mongoDbService.GetByIdAsync<User>("users", id);
            if (user == null)
            {
                return NotFound();
            }
            await _mongoDbService.DeleteAsync<User>("users", id);
            return NoContent();
        }
    }
}