import mongoose from 'mongoose'

const Player = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  age: { type: Number, required: true },
  role: { type: String, required: true },
})

export default mongoose.model('Players', Player)
