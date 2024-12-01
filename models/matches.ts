export interface Match {
  giverId: string
  receiverId: string
  status: string
  createdAt: number
  updatedAt: number
  basketId: number
}

export interface PostMatch {
  giverId: string
  basketId: number
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
  basketId: number
}

export interface EditStatus {
  status: string
  matchId: number
}
export interface MatchStatus {
  id: number
  status: string
  updatedAt: number
}
