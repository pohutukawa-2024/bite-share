import { MatchBubble } from '../../../models/matches'

interface Props {
  data: MatchBubble[]
}

export default function ChatBubble({ data }: Props) {
  console.log(data)
  return (
    <section className="w-1/5">
      <p>Your matches</p>
      <ul>
        {data.map((match) => (
          <li key={`${match.matchId}`}>
            <button className="m-3 h-24 w-24 rounded-full bg-gray-50">
              {match.otherUsername}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
