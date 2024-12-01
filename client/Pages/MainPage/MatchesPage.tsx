import { useState } from 'react'
import { MatchBubble } from '../../../models/matches'
import ChatBubble from '../../components/MessageBoard/ChatBubble'
import useGetMatches from '../../hooks/useGetMatches'
import { useAuth0 } from '@auth0/auth0-react'
import ChatBox from '../../components/MessageBoard/ChatBox'
import BasketButtons from '../../components/MessageBoard/BasketButtons'

function MatchesPage() {
  const { data, isLoading, isError } = useGetMatches()
  const { user } = useAuth0()

  // selectMatch, which will change when a button in ChatBubble is clicked
  const [selectMatch, setSelectMatch] = useState({
    matchesId: 0,
    otherUsername: '',
  })
  const handleClick = async ({
    matchId,
    otherUsername,
  }: {
    matchId: number
    otherUsername: string
  }) => {
    setSelectMatch(() => {
      return { matchesId: matchId, otherUsername: otherUsername }
    })
  }

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Sorry! An error has occurred.</div>

  // Creates an array of conversations with the other user, no matter if they were the giver or receiver
  const transformedData: MatchBubble[] = data
    ? data?.map((match) => {
        let otherId: string
        let otherUsername: string
        let otherFullName: string
        if (user?.sub === match.giverId) {
          otherId = match.receiverId
          otherUsername = match.receiverUsername
          otherFullName = match.receiverFullName
        } else {
          otherId = match.giverId
          otherUsername = match.giverUsername
          otherFullName = match.giverFullName
        }
        return { matchId: match.id, otherId, otherUsername, otherFullName }
      })
    : []

  return (
    <div className="m-16 flex h-[50%] justify-center">
      <div className="flex w-full ">
        <ChatBubble data={transformedData} onClick={handleClick} />
        <section className="w-5/6">
          <ChatBox
            matchId={selectMatch.matchesId}
            otherUsername={selectMatch.otherUsername}
          />
          <BasketButtons matchId={selectMatch.matchesId} />
        </section>
      </div>
    </div>
  )
}

export default MatchesPage
