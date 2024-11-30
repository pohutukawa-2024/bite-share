import request from 'superagent'
import { MessageWithId, PostMessage } from '../../models/messages'

// Returns all messages from a matchId
export async function getMessages(token: string, matchId: number) {
  const res = await request
    .get(`/api/v1/messages/${matchId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as MessageWithId[]
}

// Inserts new message into DB
export async function postMessage(token: string, postMessage: PostMessage) {
  await request
    .post('/api/v1/messages')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(postMessage)
}
