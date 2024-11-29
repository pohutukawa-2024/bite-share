import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { getAnotherUser } from '../apis/user'

function useAnotherProfile(username: string) {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getAnotherUser(username, token)
        return response
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useAnotherProfile
