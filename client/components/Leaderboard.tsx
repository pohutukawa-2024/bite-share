import useLeaderboard from '../hooks/useLeaderboard'
import ErrorPage from './ErrorPage'

export default function Leaderboard() {
  const { data: users, isLoading: loading, error } = useLeaderboard()

  if (loading) return <div>Loading...</div>
  if (error) return <ErrorPage />

  return (
    <div className="mt-11 rounded-3xl bg-zinc-100 p-6 shadow-lg">
      <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
        Top Givers
      </h2>
      <ul className="space-y-3">
        {users?.map((user, index) => (
          <li
            key={user.id}
            className="flex items-center justify-between gap-12 rounded-xl bg-white p-2 shadow-md"
          >
            <div className="flex items-center gap-3">
              <span className="text-md font-bold text-gray-600">
                {index + 1}.
              </span>
              <img
                src="/images/dp.png"
                alt="user icon"
                className="h-9 rounded-full  border-gray-300"
              />
              <div>
                <p className="-ml-2 text-sm text-gray-600">@{user.username}</p>
              </div>
            </div>
            {/* <div className="text-right">
              <p className="p-1 text-sm text-green-600">{user.points} pts</p>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  )
}
