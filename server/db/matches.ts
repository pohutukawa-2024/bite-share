import { Match } from '../../models/matches'
import db from './connection'

export async function getMatches(id: string) {
  const results = await db('matches')
    .join('users as users_giver', 'matches.giver_id', 'users_giver.id')
    .join('users as users_receiver', 'matches.receiver_id', 'users_receiver.id')
    .select(
      'matches.giver_id as giverId',
      'users_giver.username as giverUsername',
      'matches.receiver_id as receiverId',
      'users_receiver.username as receiverUsername',
      'matches.status as status',
      'matches.created_at as createdAt',
      'matches.updated_at as updatedAt',
    )
    .where('status', 'active')
    .andWhere((builder) =>
      builder.where('giver_id', id).orWhere('receiver_id', id),
    )
  return results as Match[]
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
