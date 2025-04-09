# Full-Stack Chat Application (MERN)

Welcome to the Full-Stack Chat Application repository! This project is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO. It enables users to engage in instant messaging with features like user authentication, real-time communication, and a responsive design.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can experience the live demo of the application here: [full-stack-chat-app-mern.onrender.com](https://full-stack-chat-app-mern.onrender.com/)

## Features

- **Real-Time Messaging**: Instant communication facilitated by Socket.IO.
- **User Authentication**: Secure login and signup functionality using JSON Web Tokens (JWT) and MongoDB.
- **Responsive Design**: Modern and mobile-friendly interface built with React.js and Tailwind CSS.
- **Scalable Backend**: Robust backend developed with Node.js and Express.js, connected to MongoDB Atlas for data storage.
- **Environment Configuration**: Secure configuration using `.env` variables for deployment.

## Tech Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB Atlas
  - Socket.IO
- **Authentication**:
  - JSON Web Tokens (JWT)
  - bcrypt.js

## Architecture

The application follows a client-server architecture:

1. **Client (Frontend)**:
   - Built with React.js to create a dynamic and responsive user interface.
   - Manages user interactions and communicates with the server via RESTful APIs and WebSockets.
   - Utilizes Tailwind CSS for styling.

2. **Server (Backend)**:
   - Developed using Node.js and Express.js to handle API requests and WebSocket connections.
   - Manages user authentication, message broadcasting, and database operations.
   - Interfaces with MongoDB Atlas to store user data and chat messages.

3. **Database**:
   - MongoDB Atlas serves as the cloud-based database solution.
   - Stores user credentials, chat histories, and other relevant data.

4. **Real-Time Communication**:
   - Socket.IO enables bidirectional event-based communication between the client and server.
   - Facilitates real-time messaging and online user status updates.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for database hosting.
- [Git](https://git-scm.com/) installed for version control.

### Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/harishgarg2508/full-stack-chat-app-MERN.git
   ```
```bash
Navigate to the Project Directory:

cd full-stack-chat-app-MERN
Set Up Environment Variables:

Create a .env file in the backend directory.

Add the following environment variables:

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
Replace your_mongodb_atlas_connection_string with your MongoDB Atlas connection string and your_jwt_secret_key with a secure secret key for JWT.

Install Dependencies:

Backend:

cd backend
npm install
Frontend:

cd ../frontend
npm install
Run the Application:

Backend:

cd backend
npm start
The backend server will start on http://localhost:5000.

Frontend:

cd frontend
npm start
The frontend development server will start on http://localhost:3000.
```

```bash
Project Structure
The repository is organized as follows:

full-stack-chat-app-MERN/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── chatController.js
│   ├── models/
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── chatRoutes.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── tailwind.config.js
│   └── .env
├── package.json
└── README.md
backend/: Contains the server-side code.

config/db.js: Database connection configuration.

controllers/: Handles the logic for authentication and chat functionalities.

models/: Defines Mongoose schemas for User and Message.

routes/: Defines API routes for authentication and chat operations.

server.js: Entry point for the backend server.

frontend/: Contains the client-side code.

public/: Static files.

src/: React application source code.

components/: Reusable React components.

context/: Context API for state management.

pages/: React components representing different pages.

App.js: Main component that sets up routing.

index.js: Entry point for the React application.

tailwind.config.js: Configuration file for Tailwind CSS.
```
```bash
Usage
User Registration:

Navigate to the signup page.

Enter the required details and submit the form.

Upon successful registration, you will be redirected to the login page.

User Login:

Enter your credentials on the login page.

Upon successful authentication, you will be redirected to the chat interface.

Chat Interface:

View the list of online users.

Select a user to start a conversation.

Send and receive messages in real-time.

Logout:

Click on the logout button to end your session securely.

Contributing
Contributions are welcome! To contribute to this project:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Make your changes.

Commit your changes (`git commit -m 
```
