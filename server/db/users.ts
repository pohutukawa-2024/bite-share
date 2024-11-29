import { EditUser, Profile } from '../../models/users'
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
      location: profile.location,
    })
    .onConflict('id')
    .merge()
}

export async function getUserByUsername(username: string) {
  const user = await db('users').select().where({ username })
  return user
}

export async function updateUserByUsername({
  username,
  full_name,
  email,
  location,
}: EditUser) {
  const user = await db('users').where({ username }).update({
    username,
    full_name,
    email,
    location,
  })
  return user
}

export async function updatePointsByUsername({
  username,
  points = 10,
}: {
  username: string
  points?: number
}) {
  await db('users').where({ username }).increment('points', points)
}
