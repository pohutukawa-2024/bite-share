import db from './connection'

// Retrieves a join table between matches and messages, and gives isRead status
export async function getNotification(id: string) {
  const results = await db('matches')
    .join('messages', 'matches.id', 'messages.matches_id')
    .select(
      'matches.id as matchesId',
      'messages.sender_id as senderId',
      'messages.is_read as isRead',
    )
    .where('giver_id', id)
    .orWhere('receiver_id', id)
  return results
}

export async function updateNotification(matchId: number) {
  await db('messages').where('matches_id', matchId).update({ is_read: true })
}
