import { Profile } from '../../models/users'
import db from './connection'

export async function getUser(id: string) {
  const results = await db('users')
    .select(
      'id as id',
      'username as username',
      'full_name as fullName',
      'email as email',
      'points as points',
      'location as location',
    )
    .where('id', id)
    .first()
  return results as Profile
}

export async function upsertProfile(profile: Profile) {
  await db('users')
    .insert({
      id: profile.id,
      username: profile.username,
      full_name: profile.fullName,
      email: profile.email,
      points: profile.points,
      locaiton: profile.location,
    })
    .onConflict('id')
    .merge()
}
