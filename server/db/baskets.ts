import { Basket } from "../../models/baskets";
import db from './connection'

export async function getBaskets() {
  const results = await db('Baskets').select()
  return results 
}

export async function addNewBasket(basket: Basket) {
  await db('baskets')
    .insert({
      ...basket,
    })
    // return { id }; // Return the inserted ID
}
