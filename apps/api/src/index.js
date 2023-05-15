import express from 'express'
import cors from 'cors'
import connectDB from './db/connectDb.js'
import dotenv from 'dotenv'
import router from './routes/router.js'
import bodyParser from 'body-parser'

const app = express()

dotenv.config()
app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

const start = async () => {
  try {
    console.log(process.env.PORT)
    await connectDB(process.env.MONGO_URI)

    app.listen(process.env.PORT, () => {
      console.log(`server running on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
