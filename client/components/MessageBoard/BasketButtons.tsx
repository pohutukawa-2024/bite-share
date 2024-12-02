import usePatchBaskets from '../../hooks/usePatchBaskets'
import useUpdateMatch from '../../hooks/useUpdateMatch'
// import { useNavigate } from 'react-router-dom'

interface SelectMatchState {
  matchesId: number
  otherUsername: string
  basketId: number
}
interface Props {
  matchId: number
  basketId: number
  setSelectMatch: React.Dispatch<React.SetStateAction<SelectMatchState>>

  // state: StateObj
  // setState: React.Dispatch<React.SetStateAction<StateObj>>
}

export default function BasketButtons({
  matchId,
  basketId,
  setSelectMatch,
  // state,
  // setState,
}: Props) {
  const updateMatch = useUpdateMatch()
  const updateBasket = usePatchBaskets()

  const handleRelistClick = () => {
    updateBasket.mutate({ basketId: basketId, status: 'active' })
    updateMatch.mutate({ matchId, status: 'inactive' })
    setSelectMatch((prev) => ({ ...prev, matchesId: 0 }))
  }

  const handleCompleteClick = () => {
    updateBasket.mutate({ basketId: basketId, status: 'inactive' })
    updateMatch.mutate({ matchId, status: 'inactive' })
    setSelectMatch((prev) => ({ ...prev, matchesId: 0 }))
  }

  if (matchId !== 0) {
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
}
