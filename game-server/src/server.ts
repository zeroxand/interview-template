import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = Number(process.env.PORT || '4000');

app.get('/', (req, res) => {
  res.send('Game server is up and running.');
});

io.on('connection', (socket) => {
  console.log(`A user connected with ID: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`User with ID ${socket.id} disconnected.`);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
