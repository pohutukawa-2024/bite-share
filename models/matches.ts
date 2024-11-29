export interface Match {
  giverId: string
  receiverId: string
  status: string
  createdAt: number
  updatedAt: number
}

export interface MatchJoin extends Match {
  giverUsername: string
  giverFullName: string
  receiverUsername: string
  receiverFullName: string
}
