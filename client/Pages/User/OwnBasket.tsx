import useGetUserBaskets from '../../hooks/useGetUserBaskets'
import usePatchBaskets from '../../hooks/usePatchBaskets'
import { useAuth0 } from '@auth0/auth0-react'
import { useQueryClient } from '@tanstack/react-query'

function OwnBasket() {
  const { data, isLoading, isError } = useGetUserBaskets()
  const { user } = useAuth0()
  const updateBasket = usePatchBaskets()
  const queryClient = useQueryClient()

  // Remove basket from request page
  const handleRemoveBasket = (basketId: number) => {
    updateBasket.mutate({ basketId, status: 'inactive' })
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Sorry, an error has occured.</div>

  return (
    <div>
      <ul>
        {data
          ?.filter((basket) => basket.status === 'active')
          .map((basket) => (
            <li key={`${basket.id}`}>
              <p>{basket.username}</p>
              <p>{basket.id}</p>
              <p>{basket.description}</p>
              <p>{basket.dietaryContent}</p>
              <p>{basket.status}</p>
              <button onClick={() => handleRemoveBasket(basket.id)}>
                Remove Basket
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default OwnBasket
