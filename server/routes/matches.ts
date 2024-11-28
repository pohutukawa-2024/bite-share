import express from 'express'

import validateAccessToken, { JwtRequest } from '../auth0'
import * as db from '../db/matches'

const router = express.Router()

router.get('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub
  console.log(id)

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

export default router