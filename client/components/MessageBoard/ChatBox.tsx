import useGetMessages from '../../hooks/useGetMessages'
import { useAuth0 } from '@auth0/auth0-react'
import SendBox from './SendBox'
import usePostMessage from '../../hooks/usePostMessage'
import { useRef, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import ErrorPage from '../ErrorPage'

interface Props {
  matchId: number
  otherUsername: string
}

export default function ChatBox({ matchId, otherUsername }: Props) {
  const { data, isLoading, isError } = useGetMessages(matchId)
  const { user } = useAuth0()
  const addMessage = usePostMessage()
  const chatBottom = useRef<HTMLDivElement>(null)
  const queryClient = useQueryClient()

  // Scrolls chatbox to the bottom
  const scrollToBottom = () => {
    chatBottom.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    if (data) {
      scrollToBottom()
    }
  }, [data])

  // Refresh messages
  const refresh = () => {
    queryClient.invalidateQueries({ queryKey: ['messages', matchId] })
  }

  // Inserts new message into DB
  const handleSubmit = async (message: string) => {
    const messageObj = { matchesId: matchId, message }
    addMessage.mutate(messageObj)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <ErrorPage />

  // Shows empty conversation when first loads (matchId = 0)
  if (matchId === 0) {
    return (
      <section className="flex h-[500px] w-full items-center justify-center rounded-lg bg-gray-100">
        <h1 className="text-lg text-gray-600">Click on a Conversation</h1>
      </section>
    )
  } else {
    return (
      <div className="w-full">
        <section className="h-[500px] overflow-y-auto rounded-tl-lg rounded-tr-lg bg-gray-100">
          <div className="flex justify-center">
            <h1 className="m-2 text-center">{otherUsername}</h1>
            <button
              onClick={refresh}
              className="m-1 rounded-lg bg-cyan-200 p-2"
            >
              Refresh
            </button>
          </div>
          <div>
            <ul>
              {data?.map((message) => (
                <li
                  key={`${message.id}`}
                  className={`flex ${user?.sub === message.senderId ? 'justify-end' : 'justify-start '}`}
                >
                  <div className="max-w-3/4">
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
