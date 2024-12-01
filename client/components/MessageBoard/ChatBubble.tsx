import { MatchBubble } from '../../../models/matches'

interface Props {
  data: MatchBubble[]
  onClick: (_: { matchId: number; otherUsername: string }) => void
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
                })
              }
              className="m-3 h-24 w-24 rounded-full bg-gray-50"
            >
              {match.otherUsername}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
