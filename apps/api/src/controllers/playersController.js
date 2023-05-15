import Player from '../models/playerModel.js'
import mongoose from 'mongoose'

const getPlayers = async (req, res) => {
  const collectionName = req.params.team

  try {
    const db = mongoose.connection.db
    const collection = db.collection(collectionName)
    const players = await collection.find().toArray()
    res.status(200).send(players)
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'fetch failed, there was an error' })
  }
}

const postPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body)

    res.status(201).json({ Player })
  } catch (error) {
    res.status(500).json({ msg: 'there was an error' })
  }
}

export { getPlayers, postPlayer }
