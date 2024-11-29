import express from 'express'
import { JwtRequest } from '../auth0'
import validateAccessToken from '../auth0'
import * as db from '../db/baskets'
import { Basket } from '../../models/baskets'
import { updateBasketById } from '../db/baskets'

const router = express.Router()

router.get('/', validateAccessToken, async (req, res) => {
  try {
    const baskets = await db.getBaskets()
    res.status(200).json(baskets)
  } catch (e) {
    console.error(e)
  }
})


router.post('/', validateAccessToken, async (req: JwtRequest, res) => {
  const newBasket: Partial<Basket> = req.body;
  const userId = req.auth?.sub; 
  

  if (!userId) {
    return res.status(403).json({ message: 'You need to log in to add a basket.' });
  }

  const basketToInsert: Basket = {
    ...newBasket,
    userId:userId,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    status: newBasket.status || 'active',
  };

  try {
     await db.addNewBasket(basketToInsert);
    return res.status(201).json({ message: 'Basket added successfully' });
  } catch (error) {
    console.error('Error adding basket:', error);
    return res.status(500).json({ message: 'Failed to add basket. Please try again later.' });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;  
    const updatedBasketData: Partial<Basket> = req.body; 

    const updatedBasket = await updateBasketById(Number(id), updatedBasketData);

    res.status(200).json(updatedBasket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while updating the basket' });
  }
});
 export default  router