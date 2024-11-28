import request from 'superagent'
import { Profile, ProfileDraft } from '../../models/users'

export async function upsertProfile(
  form: Profile | ProfileDraft,
  token: string,
) {
  await request
    .post('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}

export async function getUser(token: string) {
  const res = await request
    .get('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as Profile
}
