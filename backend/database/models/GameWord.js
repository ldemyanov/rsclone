module.exports = mongoose => {
  const gameWordSchema = mongoose.Schema(
    {
      word: {type: String, required: true, default: ''},
      writerId: {type: String, required: false},
      img: {type: String, required: false},
      painterId: {type: String, required: false},
      response: {type: String, required: false},
      responserId: {type: String, required: false},
    }
  );
  
  const GameWord = mongoose.model('rooms', gameWordSchema);
  return GameWord;
};