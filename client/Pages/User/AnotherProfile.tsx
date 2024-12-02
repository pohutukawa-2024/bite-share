import { useParams } from 'react-router-dom'
import useAnotherProfile from '../../hooks/useAnotherProfile'

function AnotherProfile() {
  const { username } = useParams()
  const { data, isLoading, isError } = useAnotherProfile(`${username}`)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Sorry, an error has occurred</div>

  if (data && data.user) {
    return (
      <div className="flex justify-center">
        <div className="m-20 flex w-1/3 flex-col items-center justify-center rounded-md border bg-gray-100 p-3 shadow-lg hover:bg-gray-200">
          <section className="flex items-center gap-4">
            <img
              src="../../Public/images/placeholder_icon.png"
              alt="user's icon"
              className="w-32 rounded-full "
            />
            <div>
              <p className="text-lg font-bold text-gray-700">
                {data.user.username}
              </p>
              <p className="text-gray-500">{data.user.location}</p>
            </div>
          </section>
          <section className="m-3 flex items-center gap-2">
            <p className="font-semibold text-gray-700">Points:</p>
            <p className="rounded-md bg-green-400 pl-2 pr-2 font-bold text-white">
              {data.user.points}
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default AnotherProfile
