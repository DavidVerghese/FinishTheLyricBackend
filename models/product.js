const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lyric = new Schema(
  {
    songTitle: { type: String, required: true },
    artist: { type: String, required: true },
    lyric: { type: String, required: true },
    imageAddress: { type: String, required: true },
    answer: { type: String, required: true },
    wrongAnswers: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('lyric', Lyric)
