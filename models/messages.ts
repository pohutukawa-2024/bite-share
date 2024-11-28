export interface Message {
  matches_id: number
  sender_id: string
  message: string
  sent_at: number
}

export interface MessageWithId {
  id: number
}
