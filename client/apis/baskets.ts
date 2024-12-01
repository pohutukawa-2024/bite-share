import request from 'superagent'
import { BasketJoinedUser, PatchBasket } from '../../models/baskets'

//Get data
export async function getBaskets(token: string) {
  const res = await request
    .get('/api/v1/baskets')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body
}

//Patch data
export async function patchBaskets(token: string, updateBasket: PatchBasket) {
  const res = await request
    .patch(`/api/v1/baskets/${updateBasket.basketId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send({
      status: updateBasket.status,
      updatedAt: Date.now(),
    })
  return res.body
}

// Retrieve only the user's baskets
export async function getUserBaskets(token: string) {
  const res = await request
    .get('/api/v1/baskets/ownbasket')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as BasketJoinedUser[]
}
