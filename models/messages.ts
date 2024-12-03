export interface PostMessage {
  matchesId: number
  message: string
}

export interface Message {
  matchesId: number
  senderId: string
  message: string
  sentAt: number
  isRead: boolean
}

export interface MessageWithId extends Message {
  id: number
}
