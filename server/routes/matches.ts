import express from 'express'

import validateAccessToken, { JwtRequest } from '../auth0'
import * as db from '../db/matches'

const router = express.Router()

// Returns all of a user's active matches as Match
router.get('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const matches = await db.getMatches(id)
    res.status(200).json(matches)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve matches' })
  }
})

// Adds new match between two users to the DB
router.post('/', validateAccessToken, async (req, res) => {
  try {
    const match = req.body
    await db.addMatch(match)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new match' })
  }
})

// Changes a match status
// param has the matchId, and the body has the status {status: ""}
router.patch('/:matchId', validateAccessToken, async (req, res) => {
  const { matchId } = req.params
  const updatedAt = Date.now()
  const status = req.body.status
  try {
    const newMatch = { id: Number(matchId), updatedAt, status }
    console.log(newMatch)
    await db.editMatch(newMatch)
    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to update match' })
  }
})

export default router
