// import { MessageWithId } from '../../models/messages'
// import { Message } from '../../models/messages'
import db from './connection'

export async function getMessages(matches_Id: number) {
  const results = await db('messages').where({ matches_Id }).select()
  return results
}
export async function addNewMessage(messageToInsert) {
  await db('messages').insert({
    matches_id: messageToInsert.matches_id,
    sender_id: messageToInsert.sender_id,
    message: messageToInsert.message,
    sent_at: messageToInsert.sent_at,
  })
}
