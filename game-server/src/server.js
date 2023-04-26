// Import required libraries
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Initialize the Express app
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Set up Socket.io with the HTTP server
const io = socketIO(server);

// Define the port for the server to listen on
const port = Number(process.env.PORT || '4000');

// Set up a simple route for the home page
app.get('/', (req, res) => {
  res.send('Game server is up and running.');
});

// Handle incoming client connections
io.on('connection', (socket) => {
  console.log(`A user connected with ID: ${socket.id}`);

  // Handle client disconnections
  socket.on('disconnect', () => {
    console.log(`User with ID ${socket.id} disconnected.`);
  });
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
