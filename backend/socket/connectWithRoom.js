const db = require("../database");

async function connectWithRoom(socket) {
  const { roomId, userId } = socket.handshake.query;
  
  socket.join(roomId)
  console.log(`${userId} joined room ${roomId}`);

  const room = await db.room.findOne({ roomId: roomId }).exec();
  const user = room.users.find((user) => user.userId === userId);

  socket.to(roomId).emit("ROOM:JOIN", user);

  socket.on('disconnect', (reason) => {
    console.log(`${userId} disconnect becouse: ${reason}`)

    // If the user closed the browser tab then "reason" equals "transport close" 
    room.users.pull

  })
}

module.exports = connectWithRoom;