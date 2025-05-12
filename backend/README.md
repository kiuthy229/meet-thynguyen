# .NET Web API

This folder contains the .NET Web API for the backend.

## Installation

1. Ensure you have the following installed:
   - [.NET SDK](https://dotnet.microsoft.com/download) (version 9.0 or higher)
   - [MongoDB](https://www.mongodb.com/try/download/community) (for database support)

2. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/meet-thynguyen.git
   cd meet-thynguyen/backend
   ```

3. Restore dependencies:
   ```bash
   dotnet restore
   ```

4. Set up the database connection in `appsettings.json`:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "mongodb://localhost:27017/YourDatabaseName"
     }
   }
   ```

## Setup

1. Navigate to this folder:
   ```bash
   cd /Users/thynguyen/Desktop/meet-thynguyen/backend/dotnet-api
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Run the application:
   ```bash
   dotnet run
   ```

4. Access the API at `https://localhost:5001` or `http://localhost:5000`.

## Project Structure

- `Controllers/`: Contains API controllers.
- `Models/`: Contains data models.
- `Program.cs`: Entry point of the application.
- `appsettings.json`: Configuration file.
