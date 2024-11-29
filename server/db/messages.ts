// import { MessageWithId } from '../../models/messages'
import { Message, MessageWithId } from '../../models/messages'
import db from './connection'

// Retrieves all messages based on a matchId
export async function getMessages(matches_Id: number) {
  const results = await db('messages')
    .where({ matches_Id })
    .select(
      'id as id',
      'matches_id as matchesId',
      'sender_id as senderId',
      'message as message',
      'sent_at as sentAt',
    )
    .orderBy('sent_at', 'desc')
  return results as MessageWithId[]
}

// Inserts new message record into DB
export async function addNewMessage(message: Message) {
  await db('messages').insert({
    matches_id: message.matchesId,
    sender_id: message.senderId,
    message: message.message,
    sent_at: message.sentAt,
  })
}
