import useGetMessages from '../../hooks/useGetMessages'
import { useAuth0 } from '@auth0/auth0-react'
import SendBox from './SendBox'
import usePostMessage from '../../hooks/usePostMessage'
import { useRef, useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import ErrorPage from '../ErrorPage'
import { RefreshCw } from 'lucide-react'

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
      <section className="flex h-[500px] w-[800px] items-center justify-center rounded-tl-xl rounded-tr-xl border border-black bg-gray-100">
        <h1 className="text-lg text-gray-600">Click on a Conversation</h1>
      </section>
    )
    // Shows conversation when a person's chat bubble is clicked
  } else {
    return (
      <div className="w-[800px]">
        <section className="w-4/4 h-[500px] overflow-y-auto rounded-tl-xl rounded-tr-xl border border-black bg-gray-100">
          <div className="flex justify-center">
            <h1 className="font m-2 font-semibold">{otherUsername}</h1>
            <button
              onClick={refresh}
              className="m-1 flex w-24 items-center justify-evenly rounded-3xl border border-black bg-white  p-2 hover:bg-slate-200"
            >
              <RefreshCw />
              Refresh
            </button>
          </div>
          <div>
            <ul>
              {data?.map((message) => (
                <li
                  key={`${message.id}`}
                  className={`flex ${user?.sub === message.senderId ? 'justify-end pr-14' : 'justify-start pl-14 '}`}
                >
                  <div className="max-w-3/4">
                    <p
                      className={`m-2 rounded-md  pb-2 pl-3 pr-3 pt-1 ${user?.sub === message.senderId ? 'rounded-br-2xl  bg-blue-500 text-white' : 'rounded-bl-2xl bg-[#1f2937] text-white'}`}
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
