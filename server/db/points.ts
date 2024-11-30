import db from './connection'

export async function getTopUsers(limit: number = 3) {
  const users = await db('users')
    .select(
      'id as id',
      'username as username',
      'full_name as fullName',
      'points as points',
      'location as location',
      'icon as icon'
    )
    .orderBy('points', 'desc')
    .limit(limit)
  return users
}
