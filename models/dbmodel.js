const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sensorSchema = new Schema({
  temperature: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  },
  moisture: {
    type: Number,
    required: true
  },
  ppm: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Sensors', sensorSchema)