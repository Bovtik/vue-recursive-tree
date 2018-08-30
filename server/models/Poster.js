const mongoose = require('mongoose')

var posterSchema = new mongoose.Schema({
  passkey: String,
  title: String,
  desc: String,
  percent: Number,
  location: String,
  city: String,
  contacts: Array,
  // date: {
    // created: Date,
    // modified: Date
  // }
})

var Poster = mongoose.model('Poster', posterSchema)

module.exports = Poster