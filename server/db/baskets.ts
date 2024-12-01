import { Basket, PatchBasketWithDate } from '../../models/baskets'
import db from './connection'

export async function getBaskets() {
  const results = await db('baskets')
    .join('users', 'baskets.user_id', 'users.id')
    .select(
      'baskets.id as id',
      'baskets.user_id as userId',
      'users.username as username',
      'baskets.description as description',
      'baskets.categories as categories',
      'baskets.dietary_content as dietaryContent',
      'baskets.location as location',
      'baskets.status as status',
      'baskets.image as image',
      'baskets.created_at as createdAt',
      'baskets.updated_at as updatedAt',
    )
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
    image: basket.image,
    created_at: basket.createdAt,
    updated_at: basket.updatedAt,
  })
}

export async function updateBasketById(
  id: number,
  updatedBasket: PatchBasketWithDate,
) {
  const updatedRows = await db('baskets').where({ id }).update({
    status: updatedBasket.status,
    updated_at: updatedBasket.updatedAt,
  })

  if (updatedRows === 0) {
    throw new Error('Basket not found')
  }

  await db('baskets').where({ id }).first()
}

export async function getBasketsByUserId(userId: string) {
  const results = await db('baskets')
    .join('users', 'baskets.user_id', 'users.id')
    .select(
      'baskets.id as id',
      'baskets.user_id as userId',
      'description as description',
      'categories as categories',
      'dietary_content as dietaryContent',
      'baskets.location as location',
      'status as status',
      'created_at as createdAt',
      'updated_at as updatedAt',
      'username as username',
      'full_name as fullName',
      'email as email',
      'points as points',
    )
    .where('baskets.user_id', userId)

  return results
}
