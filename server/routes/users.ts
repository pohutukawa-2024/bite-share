import express from 'express'

import { JwtRequest } from '../auth0'
import validateAccessToken from '../auth0'
import * as db from '../db/users'
import { EditUserWithId } from '../../models/users'

const router = express.Router()

// This retrieve's a user's own details, returns {user: Profile}
router.get('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(id)
    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// Adds a user to the DB, after they create auth0 account
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
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

// Returns another user's details with their user name, returns as {user: Profile}
router.get('/:username', validateAccessToken, async (req: JwtRequest, res) => {
  try {
    const username = req.params.username
    const user = await db.getUserByUsername(username)
    res.status(200).json({ user })
  } catch (error) {
    console.error(error)
  }
})

// Updates a user's profile
router.patch('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub
  const form = req.body

  if (!id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  if (!form) {
    res.status(400).json({ message: 'Missing form' })
    return
  }

  try {
    const profile: EditUserWithId = { ...form, id }

    await db.updateUserByUsername(profile)

    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

// router.patch('/:username/points', validateAccessToken, async (req, res) => {
//   try {
//     const { points } = req.body
//     const username = 'user2' //req.params.username

//     await db.updatePointsByUsername({ username, points })

//     res.sendStatus(204)
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })

export default router
