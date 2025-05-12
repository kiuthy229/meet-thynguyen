using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MeetThyNguyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>();

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            return Ok(users);
        }

        [HttpGet("{id}")]
        public ActionResult<User> GetUser(Guid id)
        {
            var user = users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public ActionResult<User> CreateUser([FromBody] User user)
        {
            user.Id = Guid.NewGuid();
            users.Add(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateUser(Guid id, [FromBody] User updatedUser)
        {
            var user = users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            // Update user properties
            user.Email = updatedUser.Email;
            user.Password = updatedUser.Password;
            user.Name = updatedUser.Name;
            user.Phone = updatedUser.Phone;
            user.Photo = updatedUser.Photo;
            user.Role = updatedUser.Role;
            user.Gender = updatedUser.Gender;
            user.BloodType = updatedUser.BloodType;
            user.Appointments = updatedUser.Appointments;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(Guid id)
        {
            var user = users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            users.Remove(user);
            return NoContent();
        }
    }
}