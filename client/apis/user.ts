import request from 'superagent'
import { EditUser, Profile, ProfileDraft } from '../../models/users'

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

export async function updateUser(form: EditUser, token: string) {
  await request
    .patch('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}
