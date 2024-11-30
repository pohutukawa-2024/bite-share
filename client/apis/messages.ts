import request from 'superagent'
import { MessageWithId } from '../../models/messages'

// Returns all messages from a matchId
export async function getMessages(token: string, matchId: number) {
  const res = await request
    .get(`/api/v1/messages/${matchId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as MessageWithId[]
}
