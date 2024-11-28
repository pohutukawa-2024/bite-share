import { Profile } from '../../models/users'
import db from './connection'

export async function getUser(id: string) {
  const results = await db('users').where('id', id).first()
  return results as Profile
}

export async function upsertProfile(profile: Profile) {
  await db('users').insert(profile).onConflict('id').merge()
}
