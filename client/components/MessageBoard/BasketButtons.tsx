import usePatchBaskets from '../../hooks/usePatchBaskets'
import useUpdateMatch from '../../hooks/useUpdateMatch'

interface Props {
  matchId: number
  basketId: number
}

export default function BasketButtons({ matchId, basketId }: Props) {
  const updateMatch = useUpdateMatch()
  const updateBasket = usePatchBaskets()

  const handleRelistClick = () => {
    updateBasket.mutate({ basketId: basketId, status: 'active' })
    updateMatch.mutate({ matchId, status: 'inactive' })
  }

  const handleCompleteClick = () => {
    updateBasket.mutate({ basketId: basketId, status: 'inactive' })
    updateMatch.mutate({ matchId, status: 'inactive' })
  }

  return (
    <div className="mt-4 flex justify-end gap-4">
      <button
        onClick={handleRelistClick}
        className="h-14 w-32 rounded-3xl bg-rose-500  text-white shadow-md transition duration-200 hover:bg-rose-600 focus:outline-none"
      >
        Relist Basket
      </button>
      <button
        onClick={handleCompleteClick}
        className="h-14 w-32 rounded-3xl bg-lime-500  text-white shadow-md transition duration-200 hover:bg-lime-600 focus:outline-none"
      >
        Complete Match
      </button>
    </div>
  )
}
