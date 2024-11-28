// The interface for POSTing a basket probably
export interface PostBasket {
  description: string
  categories: string
  dietaryContent: string
  location: string
  status: string
  createdAt: number
  updatedAt: number
}

export interface Basket extends PostBasket {
  userId: string
}

// interface for one basket, use Basket[] when you are expecting an array of baskets
export interface BasketWithId extends Basket {
  id: number
}
