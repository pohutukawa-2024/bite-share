import { useState } from 'react'
import { MatchBubble } from '../../../models/matches'
import ChatBubble from '../../components/MessageBoard/ChatBubble'
import useGetMatches from '../../hooks/useGetMatches'
import { useAuth0 } from '@auth0/auth0-react'

function MatchesPage() {
  const { data, isLoading, isError } = useGetMatches()
  const { user } = useAuth0()

  // selectMatch, which will change when a button in ChatBubble is clicked
  const [selectMatch, setSelectMatch] = useState({
    matchesId: 0,
  })
  const handleClick = async ({ matchId }: { matchId: number }) => {
    setSelectMatch(() => {
      return { matchesId: matchId }
    })
  }

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Sorry! An error has occurred.</div>

  console.log(selectMatch.matchesId)

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
    <div className="m-16 flex justify-center">
      <div className="flex w-3/5 ">
        <ChatBubble data={transformedData} onClick={handleClick} />
        <section className="w-4/5 rounded-md bg-gray-100">
          <h1 className="text-center">Chat with Other Person</h1>
          <div>
            <div className="flex justify-end">
              <p className="pb-21 m-2 rounded-md bg-green-400 pl-3 pr-3 pt-1">
                Hello
              </p>
            </div>
            <div className="flex justify-start">
              <p className="m-2 rounded-md bg-gray-300 pb-1 pl-3 pr-3 pt-1">
                Yo
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MatchesPage
