const router = require("express").Router();
const fileMiddleware = require('../middleware/fileMiddleware');

router.post('/', fileMiddleware.single('image'), (req, res) => {
  console.log(req.file.filename);
  try {
    if (req.file) {
      res.json({url: req.file.filename});
    }
  } catch (err) {
    res.status(500).send('Internal Server Error: Image not saved');
    console.log(err);
  }
})

module.exports = router;

