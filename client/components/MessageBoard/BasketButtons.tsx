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
}
