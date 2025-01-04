# kanban-board

# JWT-Authenticated Kanban Board

A full-stack Kanban board application with secure JWT authentication built using React, TypeScript, Express, and PostgreSQL.

## Features

- Secure user authentication with JWT
- Protected API routes
- Persistent login state
- Auto logout on token expiration
- Drag-and-drop Kanban board interface
- Task creation, editing, and deletion
- Responsive design

## Technologies Used

### Frontend
- React
- TypeScript
- Vite
- JWT-decode
- CSS

### Backend
- Node.js
- Express
- TypeScript
- PostgreSQL
- JSON Web Tokens (JWT)
- Bcrypt

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Create a `.env` file in the server directory:
```env
JWT_SECRET=your_secure_random_string
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
DB_HOST=localhost
PORT=3000
```

4. Set up the database:
```bash
# Navigate to server directory
cd server

# Run database schema
psql -U your_username -d your_database_name -f db/schema.sql
```

## Running the Application

1. Start the server:
```bash
# In the server directory
npm run dev
```

2. Start the client:
```bash
# In the client directory
npm run dev
```

The application will be available at `http://localhost:5173`

## API Endpoints

### Authentication
- POST `/auth/login` - User login
  - Body: `{ username: string, password: string }`
  - Returns: JWT token and user data

### Protected Routes
All routes below require a valid JWT token in the Authorization header

#### Tickets
- GET `/api/tickets` - Get all tickets
- POST `/api/tickets` - Create new ticket
- PUT `/api/tickets/:id` - Update ticket
- DELETE `/api/tickets/:id` - Delete ticket

## Deployment

1. Set up a PostgreSQL database on your preferred hosting service

2. Deploy the server:
- Set up environment variables on your hosting platform
- Deploy the server code

3. Deploy the client:
- Update the API URL in the client configuration
- Deploy the client code

## Security Features

- Passwords are hashed using bcrypt
- JWT tokens expire after 1 hour
- Protected API routes
- Secure token storage
- CORS protection
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Questions 

For any question email me at jakewalter080@gmail.com for at GitHub @jakewalter080