import express from 'express'
// import { JwtRequest } from '../auth0'
import validateAccessToken from '../auth0'
import * as db from '../db/messages'
import { Message } from '../../models/messages'

const router = express.Router()

router.get('/:id', validateAccessToken, async (req, res) => {
  try {
    const { id } = req.params
    const matchesId = Number(id)
    const messages = await db.getMessages(matchesId)
    res.status(200).json(messages)
  } catch (e) {
    console.error(e)
  }
})

router.post('/', validateAccessToken, async (req: JwtRequest, res) => {
  const newMessage: Partial<Message> = req.body
  const userId = req.auth?.sub

  if (!userId) {
    return res
      .status(403)
      .json({ message: 'You need to log in to see the messages' })
  }

  const messageToInsert: Message = {
    ...newMessage
  }

  try {
     db.addNewMessage(messageToInsert)
    return res.status(201).json({ message: 'Message added successfully' })
  } catch (error) {
    console.error('Error adding basket:', error)
    return res
      .status(500)
      .json({ message: 'Failed to add basket. Please try again later.' })
  }
})
export default router
