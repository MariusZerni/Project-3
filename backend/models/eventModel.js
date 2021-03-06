const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  eventName: { type: String, required: true },
  eventType: { type: String, required: true },
  eventDescription: { type: String, required: true },
  platform: { type: String, required: false },
  location: { type: String, required: false },
  // comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

module.exports = mongoose.model('EventModel', schema)
