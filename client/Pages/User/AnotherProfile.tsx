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
        <p>This will be the profile page of another user</p>
        <p>{data.user.fullName}</p>

        <div className="m-20 flex w-1/3 flex-col items-center justify-center rounded-md bg-gray-100 p-3">
          <section className="flex items-center">
            <img
              src="../../Public/images/placeholder_icon.png"
              alt="user's icon"
              className="w-32"
            />
            <div>
              <p>{data.user.username}</p> <p>{data.user.location}</p>
            </div>
          </section>
          <section className="m-3 flex items-center gap-2">
            <p>Points:</p>
            <p className="rounded-md bg-green-400 pl-2 pr-2">
              {data.user.points}
            </p>
          </section>
        </div>
      </div>
    )
  }
}

export default AnotherProfile
