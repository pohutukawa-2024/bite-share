import request from 'superagent'
import { EditUser, Profile, ProfileDraft } from '../../models/users'

// Inserts a new user into users table, only if it doesn't exist already
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

// Retrives a user's profile
export async function getUser(token: string) {
  const res = await request
    .get('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as { user: Profile }
}

// Updates a user's profile
export async function updateUser(form: EditUser, token: string) {
  await request
    .patch('/api/v1/users')
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .send(form)
}

// Retrieves another user's profile
export async function getAnotherUser(username: string, token: string) {
  const res = await request
    .get(`/api/v1/users/${username}`)
    .set('Authorization', `Bearer ${token}`)
    .set('Content-Type', 'application/json')
  return res.body as { user: Profile }
}
