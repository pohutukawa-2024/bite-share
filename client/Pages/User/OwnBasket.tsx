import useGetUserBaskets from '../../hooks/useGetUserBaskets'

function OwnBasket() {
  const { data, isLoading, isError } = useGetUserBaskets()

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
            </li>
          ))}
      </ul>
    </div>
  )
}

export default OwnBasket
