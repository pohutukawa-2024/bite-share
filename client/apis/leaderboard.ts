import request from 'superagent'
import { LeaderboardUser } from '../../models/leaderboard'

export async function fetchLeaderboard(
  // token?: string,
): Promise<LeaderboardUser[]> {
  const res = await request
    .get('/api/v1/points')
    .set('Content-Type', 'application/json')

  // if (token) {
  //   req.set('Authorization', `Bearer ${token}`)
  // }

  return res.body.users as LeaderboardUser[]
}
