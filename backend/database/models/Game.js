module.exports = mongoose => {
  const gameSchema = mongoose.Schema(
    {
      roomId: {type: Boolean, required: true},
      isGameStarted: {type: Boolean, required: true},
      gameStage: {type: String, required: true},
      words: [
        {
          word: {type: String, required: true, default: ''},
          writerId: {type: String, required: false},
          img: {type: String, required: false},
          painterId: {type: String, required: false},
          response: {type: String, required: false},
          responserId: {type: String, required: false},
        }
      ]
    }
  );

  const Room = mongoose.model('games', gameSchema);
  return Room;
};