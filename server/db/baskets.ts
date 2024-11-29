import { Basket } from '../../models/baskets'
import db from './connection'

export async function getBaskets() {
  const results = await db('baskets').select()
  return results
}

export async function addNewBasket(basket: Basket) {
  await db('baskets').insert({
    user_id: basket.userId,
    description: basket.description,
    categories: basket.categories,
    dietary_content: basket.dietaryContent,
    location: basket.location,
    status: basket.status,
    created_at: basket.createdAt,
    updated_at: basket.updatedAt,
  })
}

export async function updateBasketById(
  id: number,
  updatedBasket: Partial<Basket>,
) {
  const updatedRows = await db('baskets').where({ id }).update(updatedBasket)

  if (updatedRows === 0) {
    throw new Error('Basket not found')
  }

  await db('baskets').where({ id }).first()
}

export async function getBasketsByUserId(userId: string) {
  const results = await db('baskets')
    .join('users', 'baskets.user_id', 'users.id')
    .select()
    .where('baskets.user_id', userId)

  return results
}
