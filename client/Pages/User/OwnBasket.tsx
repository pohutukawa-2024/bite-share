import { Link } from 'react-router-dom'
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
    <>
      <h1 className="text-black-600 mb-6 mt-4 text-center text-3xl font-bold">
        Own Baskets{' '}
      </h1>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:bg-gray-50 hover:shadow-lg">
            <div>
              <p className="w-44 text-lg font-bold text-gray-800">
                Your generosity makes a difference.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Help others in need by giving food <br /> and sharing kindness.
              </p>
            </div>
            <Link to="/give" key="AddBasket">
              <button className="rounded-md bg-green-500 px-9 py-2 font-medium text-white shadow-md transition-all hover:bg-green-600">
                Give
              </button>
            </Link>
          </div>
          {data
            ?.filter((basket) => basket.status === 'active')
            .map((basket) => (
              <div
                key={basket.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:bg-gray-50 hover:shadow-lg"
              >
                <div className="flex-1 px-4">
                  <p className="mt-1 text-lg font-bold text-gray-800">
                    {basket.username}
                  </p>
                  <p className="mt-4 text-gray-700">
                    Description: {basket.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    Dietary Content: {basket.dietaryContent}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-green-600">
                    Status: {basket.status}
                  </p>
                </div>

                <button
                  className="rounded-md bg-red-500 px-6 py-2 font-medium text-white shadow-md transition-all hover:bg-red-600"
                  onClick={() => handleRemoveBasket(basket.id)}
                >
                  Remove
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default OwnBasket
