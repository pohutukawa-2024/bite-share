import request from 'superagent'
import { EditStatus, MatchJoin, PostMatch } from '../../models/matches'

// Returns all of a user's active matches as Match
export async function getMatches(token: string) {
  const res = await request
    .get('/api/v1/matches')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as MatchJoin[]
}

// Changes a match status
export async function updateMatch(token: string, updateStatus: EditStatus) {
  await request
    .patch(`/api/v1/matches/${updateStatus.matchId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send({ status: updateStatus.status })
}

// Adds new match between two users to the DB
export async function addMatch(token: string, match: PostMatch) {
  await request
    .post('/api/v1/matches/')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(match)
}
