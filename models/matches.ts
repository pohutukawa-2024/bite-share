export interface Match {
  giverId: string
  receiverId: string
  status: string
  createdAt: number
  updatedAt: number
}

export interface MatchJoin extends Match {
  giverUsername: string
  receiverUsername: string
}
