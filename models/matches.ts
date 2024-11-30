export interface Match {
  giverId: string
  receiverId: string
  status: string
  createdAt: number
  updatedAt: number
}

export interface MatchJoin extends Match {
  id: number
  giverUsername: string
  giverFullName: string
  receiverUsername: string
  receiverFullName: string
}

export interface MatchBubble {
  matchId: number
  otherFullName: string
  otherId: string
  otherUsername: string
}

export interface MatchStatus {
  id: number
  status: string
  updatedAt: number
}
