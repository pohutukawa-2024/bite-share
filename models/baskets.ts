// interface for one basket, use Basket[] when you are expecting an array of baskets
export interface Basket {
  user_id: string
  description: string
  categories: string
  dietary_content: string
  location: string
  status: string
  created_at: number
  updated_at: number
}

export interface BasketWithId extends Basket {
  id: number
}
