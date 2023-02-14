module.exports = mongoose => {
  const gameWordSchema = mongoose.Schema(
    {
      word: String,
      writerId: String,
      img: String,
      painterId: String,
      response: String,
      responserId: String,
    }
  );
  
  const GameWord = mongoose.model('words', gameWordSchema);
  return GameWord;
};