import { MatchBubble } from '../../../models/matches'

interface Props {
  data: MatchBubble[]
  onClick: (_: {
    matchId: number
    otherUsername: string
    basketId: number
  }) => void
}

export default function ChatBubble({ data, onClick }: Props) {
  return (
    <section className="mr-2 flex h-[500px] w-[265px] flex-col items-center  rounded-tl-xl rounded-tr-xl  border border-black bg-gray-100">
      <p className="mt-3 font-semibold">Your Matches</p>
      <ul>
        {data.map((match) => (
          <li
            className="flex items-center justify-center "
            key={`${match.matchId}`}
          >
            <button
              onClick={() =>
                onClick({
                  matchId: match.matchId,
                  otherUsername: match.otherUsername,
                  basketId: match.basketId,
                })
              }
              className="m-2 flex h-12 w-full items-center justify-center rounded-xl border border-black bg-white p-3 hover:bg-gray-200"
            >
              {match.otherUsername}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
