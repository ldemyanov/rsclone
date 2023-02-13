const db = require("../database");

async function connectWithRoom(socket) {
  const { roomId, userId } = socket.handshake.query;
  
  socket.join(roomId)
  console.log(`${userId} joined room ${roomId}`);

  let room = await db.room.findOne({ roomId: roomId }).exec();
  let user = room.users.find((user) => user.userId === userId);

  socket.to(roomId).emit("ROOM:JOIN", user);

  socket.on('disconnecting', async (reason) => {
    // If the user closed the browser tab then "reason" equals "transport close" 
    console.log(`${userId} disconnecting becouse: ${reason}`)

    await room.users.pull({ userId });
    await room.save();

    socket.to(roomId).emit("ROOM:LEFT", userId);

    // to remove room if all users disconected
    room = await db.room.findOne({ roomId: roomId }).exec();
    if (room.users.length === 0) {
      room.remove();
    } 

  });

  socket.on('USER:EXCLUDE', async (excUserId) => {
    room = await db.room.findOne({ roomId: roomId }).exec();
    room.users.pull({ excUserId });
    room.save();

    socket.emit("ROOM:LEFT", excUserId)
    socket.to(roomId).emit("ROOM:LEFT", excUserId);
  })

  socket.on('USER:SET_STATUS', async (status) => {

    room = await db.room.findOne({ roomId: roomId }).exec();
    user = room.users.find((user) => user.userId === userId);
    user.status = status;
    await room.save();

    const res = {
      status: user.status, 
      userId: user.userId
    }

    socket.emit("ROOM:STATUS", res);
    socket.to(roomId).emit("ROOM:STATUS", res);
  })

  socket.on('USER:SET_TYPE_GAME', async (typeGame) => {
    room = await db.room.findOne({ roomId: roomId }).exec();
    room.typeGame = typeGame;
    await room.save();

    socket.emit("ROOM:GET_TYPE_GAME", typeGame)
    socket.to(roomId).emit("ROOM:GET_TYPE_GAME", typeGame);
  })
}

module.exports = connectWithRoom;