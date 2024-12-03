import request from 'superagent'
import { Notified } from '../../models/matches'

// Retrieves a join between matches and messages, and gives isRead status
// If any false isRead, would render notification
export async function getNotifications(token: string) {
  const res = await request
    .get('/api/v1/notifications')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as Notified[]
}

export async function updateNotifications(token: string, matchId: number) {
  await request
    .patch(`/api/v1/notifications/${matchId}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
}
