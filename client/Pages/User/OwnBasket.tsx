import useGetUserBaskets from '../../hooks/useGetUserBaskets'
import usePatchBaskets from '../../hooks/usePatchBaskets'

function OwnBasket() {
  const { data, isLoading, isError } = useGetUserBaskets()
  const updateBasket = usePatchBaskets()

  // Remove basket from request page
  const handleRemoveBasket = (basketId: number) => {
    updateBasket.mutate({ basketId, status: 'inactive' })
  }

  if (isLoading)
    return <div className="mt-8 text-center text-gray-600">Loading...</div>
  if (isError)
    return (
      <div className="mt-8 text-center text-red-600">
        Sorry, an error has occurred.
      </div>
    )

  return (
    <div className="mt-16 p-4">
      <ul className="space-y-4">
        {data
          ?.filter((basket) => basket.status === 'active')
          .map((basket) => (
            <li
              key={basket.id}
              className="rounded-md border border-gray-300 bg-white p-4 shadow-md hover:bg-gray-50"
            >
              <p className="text-lg font-semibold text-gray-700">
                {basket.username}
              </p>
              <p className="text-sm text-gray-500">ID: {basket.id}</p>
              <p className="mt-2 text-gray-600">{basket.description}</p>
              <p className="mt-1 text-sm text-gray-500">
                Dietary Content: {basket.dietaryContent}
              </p>
              <p className="mt-1 text-sm font-semibold text-green-600">
                Status: {basket.status}
              </p>
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
