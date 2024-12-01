import { useQuery } from '@tanstack/react-query';
import { fetchLeaderboard } from '../apis/leaderboard';
import { LeaderboardUser } from '../../models/leaderboard';
// import { useAuth0 } from '@auth0/auth0-react';

// function useLeaderboard() {
//   const { getAccessTokenSilently } = useAuth0();

//   return useQuery({
//     queryKey: ['leaderboard'],
//     queryFn: async () => {
//       const token = await getAccessTokenSilently(); 
//       return await fetchLeaderboard(token); 
//       return await fetchLeaderboard(); 
//     },
//   });
// }

// export default useLeaderboard;




function useLeaderboard() {
  return useQuery<LeaderboardUser[], Error>({
    queryKey: ['leaderboard'],
    queryFn: fetchLeaderboard,
  });
}

export default useLeaderboard;
