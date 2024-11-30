import express from 'express'
import * as db from '../db/points'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await db.getTopUsers(3) 
    res.status(200).json({ users })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to fetch leaderboard data' })
  }
})

export default router
