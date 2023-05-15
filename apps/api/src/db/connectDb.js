import mongoose from 'mongoose'

const connectDB = (url) => {
  const db = mongoose.connect(url)
  return db
}

export default connectDB
