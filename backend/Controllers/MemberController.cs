using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private static List<Member> members = new List<Member>();

        [HttpGet]
        public ActionResult<IEnumerable<Member>> GetAllMembers()
        {
            return Ok(members);
        }

        [HttpGet("{id}")]
        public ActionResult<Member> GetMember(Guid id)
        {
            var member = members.FirstOrDefault(m => m.Id == id);
            if (member == null)
            {
                return NotFound();
            }
            return Ok(member);
        }

        [HttpPost]
        public ActionResult<Member> CreateMember([FromBody] Member member)
        {
            member.Id = Guid.NewGuid();
            members.Add(member);
            return CreatedAtAction(nameof(GetMember), new { id = member.Id }, member);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateMember(Guid id, [FromBody] Member updatedMember)
        {
            var member = members.FirstOrDefault(m => m.Id == id);
            if (member == null)
            {
                return NotFound();
            }

            // Update member properties
            member.Email = updatedMember.Email;
            member.Password = updatedMember.Password;
            member.Name = updatedMember.Name;
            member.Phone = updatedMember.Phone;
            member.Photo = updatedMember.Photo;
            member.TicketPrice = updatedMember.TicketPrice;
            member.Role = updatedMember.Role;
            member.Specialization = updatedMember.Specialization;
            member.Qualifications = updatedMember.Qualifications;
            member.Experiences = updatedMember.Experiences;
            member.Bio = updatedMember.Bio;
            member.About = updatedMember.About;
            member.TimeSlots = updatedMember.TimeSlots;
            member.Reviews = updatedMember.Reviews;
            member.AverageRating = updatedMember.AverageRating;
            member.TotalRating = updatedMember.TotalRating;
            member.IsApproved = updatedMember.IsApproved;
            member.Appointments = updatedMember.Appointments;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteMember(Guid id)
        {
            var member = members.FirstOrDefault(m => m.Id == id);
            if (member == null)
            {
                return NotFound();
            }
            members.Remove(member);
            return NoContent();
        }
    }
}