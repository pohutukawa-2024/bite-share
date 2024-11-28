export interface Message {
  matchesId: number
  senderId: string
  message: string
  sentAt: number
}

export interface MessageWithId {
  id: number
}
