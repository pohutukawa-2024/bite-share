import express from 'express'
import { JwtRequest } from '../auth0'
import validateAccessToken from '../auth0'
import * as db from '../db/baskets'
import { Basket, PatchBasketWithDate, PostBasket } from '../../models/baskets'
import { updateBasketById } from '../db/baskets'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const baskets = await db.getBaskets()
    res.status(200).json(baskets)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Unable to retrieve baskets' })
  }
})

router.post('/', validateAccessToken, async (req: JwtRequest, res) => {
  const newBasket: PostBasket = req.body
  const userId = req.auth?.sub //'auth|101'

  if (!userId) {
    return res
      .status(403)
      .json({ message: 'You need to log in to add a basket.' })
  }

  const basketToInsert: Basket = {
    ...newBasket,
    userId: userId,
  }

  try {
    await db.addNewBasket(basketToInsert)
    return res.status(201).json({ message: 'Basket added successfully' })
  } catch (error) {
    console.error('Error adding basket:', error)
    return res
      .status(500)
      .json({ message: 'Failed to add basket. Please try again later.' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const updatedBasketData: PatchBasketWithDate = req.body

    const updatedBasket = await updateBasketById(Number(id), updatedBasketData)

    res.status(204).json(updatedBasket)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Something went wrong while updating the basket' })
  }
})

// Retrieve only the user's baskets
router.get('/ownbasket', validateAccessToken, async (req: JwtRequest, res) => {
  const id = req.auth?.sub

  if (!id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const baskets = await db.getBasketsByUserId(id)
    res.status(200).json(baskets)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Unable to retrieve a user's basket" })
  }
})

export default router
