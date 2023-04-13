import Player from '../models/playerModel'

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find()

    res.status(200).send(players)
  } catch (error) {
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
