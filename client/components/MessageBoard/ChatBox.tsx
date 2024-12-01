import useGetMessages from '../../hooks/useGetMessages'
import { useAuth0 } from '@auth0/auth0-react'
import SendBox from './SendBox'
import usePostMessage from '../../hooks/usePostMessage'
import { useRef, useEffect } from 'react'

interface Props {
  matchId: number
  otherUsername: string
}

export default function ChatBox({ matchId, otherUsername }: Props) {
  const { data, isLoading, isError } = useGetMessages(matchId)
  const { user } = useAuth0()
  const addMessage = usePostMessage()
  const chatBottom = useRef<HTMLDivElement>(null)

  // Scrolls chatbox to the bottom
  const scrollToBottom = () => {
    chatBottom.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    if (data) {
      scrollToBottom()
    }
  }, [data])

  // Inserts new message into DB
  const handleSubmit = async (message: string) => {
    const messageObj = { matchesId: matchId, message }
    addMessage.mutate(messageObj)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Sorry! An error has occurred.</div>

  // Shows empty conversation when first loads (matchId = 0)
  if (matchId === 0) {
    return (
      <section className="h-[500px] w-full rounded-lg bg-gray-100">
        <h1 className="text-center">Click on a Conversation</h1>
      </section>
    )
  } else {
    return (
      <div className="w-full">
        <section className="h-[500px] overflow-y-auto rounded-tl-lg rounded-tr-lg bg-gray-100">
          <h1 className="m-2 text-center">{otherUsername}</h1>
          <div>
            <ul>
              {data?.map((message) => (
                <li key={`${message.id}`}>
                  <div
                    className={`flex ${user?.sub === message.senderId ? 'justify-end' : 'justify-start'}`}
                  >
                    <p
                      className={`m-2 rounded-md pb-1 pl-3 pr-3 pt-1 ${user?.sub === message.senderId ? 'bg-green-400' : 'bg-gray-400'}`}
                    >{`${message.message}`}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div ref={chatBottom} />
          </div>
        </section>

        <SendBox onSubmit={handleSubmit} />
      </div>
    )
  }
}
