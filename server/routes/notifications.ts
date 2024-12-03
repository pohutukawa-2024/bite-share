import express from 'express'
import validateAccessToken, { JwtRequest } from '../auth0'
import * as db from '../db/notifications'

const router = express.Router()

// Retrieves a join between matches and messages, and gives isRead status
// If any false isRead, would render notification
router.get('/', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const notifications = await db.getNotification(id)
    res.status(200).json(notifications)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to retrieve notification' })
  }
})

export default router
