import request from 'superagent'
import { MatchJoin } from '../../models/matches'

// Returns all of a user's active matches as Match
export async function getMatches(token: string) {
  const res = await request
    .get('/api/v1/matches')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as MatchJoin[]
}
