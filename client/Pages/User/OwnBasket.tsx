import useGetUserBaskets from '../../hooks/useGetUserBaskets'
import usePatchBaskets from '../../hooks/usePatchBaskets'

function OwnBasket() {
  const { data, isLoading, isError } = useGetUserBaskets()
  const updateBasket = usePatchBaskets()

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
              <button
                className="m-2 h-16 w-16 rounded-full bg-cyan-200"
                onClick={() => handleRemoveBasket(basket.id)}
              >
                Remove Basket
              </button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default OwnBasket
