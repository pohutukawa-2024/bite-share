import useGetUserBaskets from '../../hooks/useGetUserBaskets'

function OwnBasket() {
  const { data, isLoading, isError } = useGetUserBaskets()

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
            </li>
          ))}
      </ul>
    </div>
  )
}

export default OwnBasket
