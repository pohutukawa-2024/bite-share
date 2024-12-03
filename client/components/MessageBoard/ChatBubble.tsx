import { MatchBubble } from '../../../models/matches'

interface SelectMatchObj {
  matchesId: number
  otherUsername: string
  basketId: number
}
interface Props {
  data: MatchBubble[]
  onClick: (_: {
    matchId: number
    otherUsername: string
    basketId: number
  }) => void
  selectMatch: SelectMatchObj
}

export default function ChatBubble({ data, onClick, selectMatch }: Props) {
  return (
    <section className="h-[500px] w-1/6 overflow-y-auto">
      <p>Your matches</p>
      <ul>
        {data.map((match) => (
          <li key={`${match.matchId}`}>
            <button
              onClick={() =>
                onClick({
                  matchId: match.matchId,
                  otherUsername: match.otherUsername,
                  basketId: match.basketId,
                })
              }
              className={`m-3 h-16 w-16 rounded-full  ${selectMatch.matchesId === match.matchId ? 'bg-green-300' : 'bg-gray-50'}`}
            >
              {match.otherUsername}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
