import express from 'express'
import { postPlayer, getPlayers } from '../controllers/playersController.js'

const router = express.Router()

router.route('/:team').get(getPlayers)
router.route('/').post(postPlayer)

export default router
