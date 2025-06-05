using MeetThyNguyen.Services;
using MeetThyNguyen.Models;
using Microsoft.OpenApi.Models;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Serializers;
using MongoDB.Bson;

var builder = WebApplication.CreateBuilder(args);

// Configure MongoDB Guid serialization
BsonSerializer.RegisterSerializer(new GuidSerializer(BsonType.String));

builder.Services.Configure<MongoDbSettings>(
    builder.Configuration.GetSection("MongoDB"));
builder.Services.AddSingleton<MongoDbService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer(); // Ensure OpenAPI/Swagger is added
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Meet Thy Nguyen API", Version = "v1" });
}); // Ensure OpenAPI/Swagger is added
builder.Services.AddOpenApi(); // Ensure OpenAPI/Swagger is added
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Add Swagger middleware
    app.UseSwaggerUI(); // Add Swagger UI middleware
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();

app.MapControllers(); // Ensure controllers are mapped

app.Run();
