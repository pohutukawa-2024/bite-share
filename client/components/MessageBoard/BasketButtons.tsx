import usePatchBaskets from '../../hooks/usePatchBaskets'
import useUpdateMatch from '../../hooks/useUpdateMatch'

interface Props {
  matchId: number
}

export default function BasketButtons({ matchId }: Props) {
  const updateMatch = useUpdateMatch()
  const updateBasket = usePatchBaskets()

  const handleRelistClick = () => {}

  const handleCompleteClick = () => {}

  return (
    <div className="flex flex-row">
      <button
        onClick={handleRelistClick}
        className="m-2 h-16 w-32  rounded-full bg-red-200 pb-0.5 pl-2 pr-2 pt-0.5"
      >
        Relist Basket
      </button>
      <button
        onClick={handleCompleteClick}
        className="m-2 h-16 w-32 rounded-full bg-green-200 pb-0.5 pl-2 pr-2 pt-0.5"
      >
        Complete Match
      </button>
    </div>
  )
}
