using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using MeetThyNguyen.Services;
using System.Threading.Tasks;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly MongoDbService _mongoDbService;

        public MemberController(MongoDbService mongoDbService)
        {
            _mongoDbService = mongoDbService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMembers()
        {
            var members = await _mongoDbService.GetAllAsync<Member>("members");
            return Ok(members);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMember(string id)
        {
            var member = await _mongoDbService.GetByIdAsync<Member>("members", id);
            if (member == null)
            {
                return NotFound();
            }
            return Ok(member);
        }

        [HttpPost]
        public async Task<IActionResult> CreateMember([FromBody] Member member)
        {
            await _mongoDbService.CreateAsync("members", member);
            return CreatedAtAction(nameof(GetMember), new { id = member.Id }, member);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMember(string id, [FromBody] Member updatedMember)
        {
            var existingMember = await _mongoDbService.GetByIdAsync<Member>("members", id);
            if (existingMember == null)
            {
                return NotFound();
            }

            updatedMember.Id = id;
            await _mongoDbService.UpdateAsync("members", id, updatedMember);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMember(string id)
        {
            var member = await _mongoDbService.GetByIdAsync<Member>("members", id);
            if (member == null)
            {
                return NotFound();
            }
            await _mongoDbService.DeleteAsync<Member>("members", id);
            return NoContent();
        }
    }
}