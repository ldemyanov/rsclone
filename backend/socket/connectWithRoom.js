const db = require('../database');

async function connectWithRoom(socket) {
  const { roomId, userId } = socket.handshake.query;
  const gameId = `${roomId}-game`;
  
  socket.join(roomId);
  console.log(`${userId} joined room ${roomId}`);

  let room = await db.room.findOne({ roomId: roomId }).exec();
  let user = room.users.find((user) => user.userId === userId);

  socket.to(roomId).emit('ROOM:JOIN', user);

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
    let excUser = await room.users.find((user) => user.userId === excUserId);
    await excUser.remove();
    await room.save();

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
      userId: user.userId,
    }

    if (status === 'active') {
      socket.join(gameId);
    } else {
      socket.leave(gameId);
    }

    socket.emit('ROOM:STATUS', res);
    socket.to(roomId).emit('ROOM:STATUS', res);
  })

  socket.on('USER:SET_TYPE_GAME', async (typeGame) => {
    room = await db.room.findOne({ roomId: roomId }).exec();
    room.typeGame = typeGame;
    await room.save();

    socket.emit("ROOM:GET_TYPE_GAME", typeGame)
    socket.to(roomId).emit("ROOM:GET_TYPE_GAME", typeGame);
  })

  socket.on('USER:START_GAME', async (req) => {
    if (req.isGameStarted) {

      room = await db.room.findOne({ roomId: roomId }).exec();
      let words = [];

      room.users.map(user => user.status === 'active' && words.push({
        word: "",
        writerId: user.userId,
      }));

      const newGame = new db.game({
        roomId: roomId,
        isGameStarted: true,
        gameStage: 'write',
        words: words,
      })
      newGame.save();

      socket.emit("ROOM:START_GAME", newGame);
      socket.to(roomId).emit("ROOM:START_GAME", newGame);
    }
  })

  socket.on('USER:SEND_WORD', async (wordObj) => {

    const { word, writerId } = wordObj;

    const game = await db.game.findOne({ roomId: roomId }).exec();
    let currentWord;

    for (let i = 0; i < game.words.length; i++) {
      if (game.words[i].writerId === writerId) {
        game.words[i].word = word;
        // TODO game.words[i].painterId = RANDOM ALGORITM
        game.words[i].painterId = game.words.at(i-1).writerId;
        currentWord = game.words[i];
      }
    }

    await game.save();

    let isFull = game.words.every((el) => el.word && el.painterId);

    if (isFull) {
      game.gameStage = 'draw';
      await game.save();
      socket.emit("ROOM:SEND_WORDS", game);
      socket.to(gameId).emit("ROOM:SEND_WORDS", game);
    } else {
      socket.emit("ROOM:SEND_ONE_WORD", currentWord)
      socket.to(gameId).emit("ROOM:SEND_ONE_WORD", currentWord);
    }
  });
}

module.exports = connectWithRoom;