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
    .orderBy('updated_at', 'desc')
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
  if (updatedBasket.status === 'active') {
    // Update the basket with 'pending' status
    const updatedRows = await db('baskets').where({ id }).update({
      status: updatedBasket.status,
      updated_at: updatedBasket.updatedAt,
    });

    if (updatedRows === 0) {
      throw new Error('Basket not found');
    }
  }
  if (updatedBasket.status === 'pending') {
    // Update the basket with 'pending' status
    const updatedRows = await db('baskets').where({ id }).update({
      status: updatedBasket.status,
      updated_at: updatedBasket.updatedAt,
    });

    if (updatedRows === 0) {
      throw new Error('Basket not found');
    }
  }

  if (updatedBasket.status === 'inactive') {
    // Update the basket with 'inactive' status
    await db('baskets').where({ id }).update({
      status: updatedBasket.status,
      updated_at: updatedBasket.updatedAt,
    });

    // Increment points for the user associated with the basket
    const basket = await db('baskets').select('user_id').where({ id }).first();

    if (basket && basket.user_id) {
      await db('users')
        .where({ id: basket.user_id })
        .increment('points', 10);
    } else {
      throw new Error('User not found for the basket');
    }
  }
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
