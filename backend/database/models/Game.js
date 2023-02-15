module.exports = mongoose => {
  const gameSchema = mongoose.Schema(
    {
      roomId: {type: String, required: true},
      isGameStarted: {type: Boolean, required: true},
      gameStage: {type: String, required: true},
      words: [
        {
          word: String,
          writerId: String,
          img: String,
          painterId: String,
          isWriterReady: Boolean,
          response: String,
          responserId: String,
        }
      ]
    }
  );

  const Room = mongoose.model('games', gameSchema);
  return Room;
};