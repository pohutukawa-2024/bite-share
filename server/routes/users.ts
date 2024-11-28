import express from 'express'

import { JwtRequest } from '../auth0'
import validateAccessToken from '../auth0'
import * as db from '../db/users'

const router = express.Router()

router.get('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(id)
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

router.post('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub
  const form = req.body

  if (!id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  try {
    const profile = { ...form, id }
    await db.upsertProfile(profile)
    console.log(profile)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

export default router
