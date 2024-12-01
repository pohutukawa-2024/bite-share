import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getMessages } from '../apis/messages'

function useGetMessages(matchId: number) {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['messages', matchId],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getMessages(token, matchId)
        return res
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useGetMessages
