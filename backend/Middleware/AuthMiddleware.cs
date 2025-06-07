using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MeetThyNguyen.Middleware
{
    public class AuthMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _configuration;

        public AuthMiddleware(RequestDelegate next, IConfiguration configuration)
        {
            _next = next;
            _configuration = configuration;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Headers["Authorization"].ToString()?.Replace("Bearer ", "");
            var refreshToken = context.Request.Headers["RefreshToken"].ToString();

            if (!string.IsNullOrEmpty(token))
            {
                try
                {
                    var key = Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]);
                    var tokenHandler = new JwtSecurityTokenHandler();
                    tokenHandler.ValidateToken(token, new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = _configuration["Jwt:Issuer"],
                        ValidAudience = _configuration["Jwt:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(key)
                    }, out _);
                }
                catch
                {
                    if (!string.IsNullOrEmpty(refreshToken))
                    {
                        // Handle refresh token validation and issue a new access token
                        var newAccessToken = GenerateAccessToken(refreshToken);
                        if (newAccessToken != null)
                        {
                            context.Response.Headers["NewAccessToken"] = newAccessToken;
                        }
                        else
                        {
                            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                            await context.Response.WriteAsync("Invalid or expired refresh token.");
                            return;
                        }
                    }
                    else
                    {
                        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
                        await context.Response.WriteAsync("Invalid or expired token.");
                        return;
                    }
                }
            }

            await _next(context);
        }

        private string GenerateAccessToken(string refreshToken)
        {
            // Validate the refresh token (this logic depends on your implementation)
            // For example, check if the refresh token exists in the database and is valid.

            // If valid, generate a new access token
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, "userId"), // Replace with actual user ID
                new Claim(JwtRegisteredClaimNames.Email, "userEmail"), // Replace with actual user email
                new Claim("role", "userRole") // Replace with actual user role
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(1),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}