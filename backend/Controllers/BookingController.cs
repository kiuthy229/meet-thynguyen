using System;
using Microsoft.AspNetCore.Mvc;
using MeetThyNguyen.Services;
using MeetThyNguyen.Models;

namespace MeetThyNguyen.Controllers;

[Controller]
[Route("api/[controller]")]
public class BookingController : Controller
{
    private readonly MongoDbService _mongoDbService;

    public BookingController(MongoDbService mongoDbService)
    {
        _mongoDbService = mongoDbService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateBooking([FromBody] Booking booking)
    {
        booking.CreatedAt = DateTime.UtcNow;
        booking.UpdatedAt = DateTime.UtcNow;
        await _mongoDbService.CreateAsync("bookings", booking);
        return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, booking);
    }

    [HttpGet]
    public async Task<List<Booking>> GetBookings()
    {
        return await _mongoDbService.GetAllAsync<Booking>("bookings");
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetBooking(string id)
    {
        var booking = await _mongoDbService.GetByIdAsync<Booking>("bookings", id);
        if (booking == null)
        {
            return NotFound();
        }
        return Ok(booking);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBooking(string id, [FromBody] Booking updatedBooking)
    {
        var existingBooking = await _mongoDbService.GetByIdAsync<Booking>("bookings", id);
        if (existingBooking == null)
        {
            return NotFound();
        }

        updatedBooking.Id = id;
        updatedBooking.UpdatedAt = DateTime.UtcNow;
        await _mongoDbService.UpdateAsync("bookings", id, updatedBooking);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBooking(string id)
    {
        var booking = await _mongoDbService.GetByIdAsync<Booking>("bookings", id);
        if (booking == null)
        {
            return NotFound();
        }
        await _mongoDbService.DeleteAsync<Booking>("bookings", id);
        return NoContent();
    }
}
