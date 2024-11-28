import { Match } from '../../models/matches'
import db from './connection'

export async function getMatches(id: string) {
  const results = await db('matches')
    .select()
    .where('status', 'active')
    .andWhere((builder) =>
      builder.where('giver_id', id).orWhere('receiver_id', id),
    )
  return results
}

export async function addMatch(match: Match) {
  await db('matches').insert({
    giver_id: match.giverId,
    receiver_id: match.receiverId,
    status: match.status,
    created_at: match.createdAt,
    updated_at: match.updatedAt,
  })
}
