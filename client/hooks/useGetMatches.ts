import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getMatches } from '../apis/matches'

function useGetMatches() {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['matches'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getMatches(token)
        return res
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useGetMatches
