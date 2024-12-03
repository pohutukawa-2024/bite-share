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
      <div className="mr-2 mt-2 flex gap-2">
        <button
          onClick={handleRelistClick}
          className="h-[60px] w-32 rounded-bl-xl rounded-br-xl bg-[#1f2937]  text-white shadow-md transition duration-200 hover:scale-105 hover:bg-rose-600 hover:text-white focus:outline-none"
        >
          Re-list <br /> Basket
        </button>
        <button
          onClick={handleCompleteClick}
          className="h-[60px] w-32 rounded-bl-xl rounded-br-xl bg-yellow-500 text-black  shadow-md transition duration-200 hover:scale-105 hover:bg-green-600 hover:text-white"
        >
          Complete <br /> Match
        </button>
      </div>
    )
  }
}
