import express from 'express'
const router = express.Router()

import { postPlayer, getPlayers } from '../controllers/playersController'

// fetching players
router.route('/').post(postPlayer).get(getPlayers)

export default router
