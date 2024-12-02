import  useLeaderboard  from '../hooks/useLeaderboard'
import ErrorPage from './ErrorPage';

export default function Leaderboard() {
  const { data: users, isLoading: loading, error } = useLeaderboard();

  if (loading) return <div>Loading...</div>
  if (error) return <ErrorPage />

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {users?.map((user, index) => (
          <li key={user.id}>
           
            <span>{index + 1}.<img src={user.icon} alt="user icon" /> {user.fullName} ({user.username})</span><br />
            <span>Points: {user.points}</span><br />
          </li>
        ))}
      </ul>
    </div>
  )
}
