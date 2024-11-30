import { Match, MatchJoin, MatchStatus } from '../../models/matches'
import db from './connection'

// Returns all of a user's active matches as Match
export async function getMatches(id: string) {
  const results = await db('matches')
    .join('users as users_giver', 'matches.giver_id', 'users_giver.id')
    .join('users as users_receiver', 'matches.receiver_id', 'users_receiver.id')
    .select(
      'matches.id as id',
      'matches.giver_id as giverId',
      'users_giver.username as giverUsername',
      'users_giver.full_name as giverFullName',
      'matches.receiver_id as receiverId',
      'users_receiver.username as receiverUsername',
      'users_receiver.full_name as receiverFullName',
      'matches.status as status',
      'matches.created_at as createdAt',
      'matches.updated_at as updatedAt',
    )
    .where('status', 'active')
    .andWhere((builder) =>
      builder.where('giver_id', id).orWhere('receiver_id', id),
    )
  return results as MatchJoin[]
}

// Adds new match between two users to the DB
export async function addMatch(match: Match) {
  await db('matches').insert({
    giver_id: match.giverId,
    receiver_id: match.receiverId,
    status: match.status,
    created_at: match.createdAt,
    updated_at: match.updatedAt,
  })
}

// Changes a match status to inactive
export async function editMatch(newMatch: MatchStatus) {
  await db('matches').where('id', newMatch.id).update({
    status: newMatch.status,
    updated_at: newMatch.updatedAt,
  })
}
