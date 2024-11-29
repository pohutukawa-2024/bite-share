// The interface for POSTing a basket probably
export interface PostBasket {
  description: string | undefined
  categories: string | undefined
  dietaryContent: string | undefined
  location: string | undefined
  image: string | undefined
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

export interface BasketJoinedUser extends BasketWithId {
  username: string
  fullName: string
  email: string
  points: number
}
