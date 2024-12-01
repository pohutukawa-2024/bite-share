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
    <section className="w-1/6">
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
              className="m-3 h-16 w-16 rounded-full bg-gray-50"
            >
              {match.otherUsername}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
