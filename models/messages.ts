export interface PostMessage {
  matchesId: number
  message: string
}

export interface Message {
  matchesId: number
  senderId: string
  message: string
  sentAt: number
}

export interface MessageWithId extends Message {
  id: number
}
