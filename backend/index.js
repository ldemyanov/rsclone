const { createServer } = require('http');
const { Server } = require("socket.io");
const express = require("express");
const cors = require("cors");
const db = require("./database");

// Using .env
require("dotenv").config();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

// Initialization
const app = express();
app.use(express.json());
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    credentials: true,
    origin: ["http://localhost:3000", "https://librebay.com/"]
  }
});

// Connect to BD
db.mongoose.connect(MONGODB_URI, { dbName: "raccon-phone" });

app.get("/", (req, res) => {
  res.send("Сервер работает");
});

app.get("/room", async (req, res) => {

  const { name, icon, roomId } = req.query;

  if (roomId) {

    const room = await db.room.findOne({ roomId: roomId }).exec();
    const user = new db.user({
      userId: `${name}-${(Math.random() * 100000).toFixed(0)}`,
      name,
      icon,
      status: "empty",
      main: false,
    })

    room.users.push(user);
    room.save((error) => {
      if (error) res.sendStatus(500);
      res.json(room)
    });

  } else {

    const room = new db.room({
      roomId: `room-${name}-${(Math.random() * 100000).toFixed(0)}`,
      typeGame: "Simple",
      users: [
        {
          userId: `${name}-${(Math.random() * 100000).toFixed(0)}`,
          name,
          icon,
          status: "empty",
          main: true,
        }
      ]
    });

    room.save((error) => {
      if (error) res.sendStatus(500);
      res.json(room);
    });

  }
});

io.on('connection', async (socket) => {
  const roomId = socket.handshake.query.roomId;
  socket.join(roomId)
  console.log(`User joined room ${roomId}`);

  const room = await db.room.findOne({ roomId: roomId }).exec();
  const user = room.users.at(-1);

  socket.to(roomId).emit("ROOM:JOIN", user);
});

server.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});