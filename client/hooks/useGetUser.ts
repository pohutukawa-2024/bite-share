import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getUser } from '../apis/user'

function useGetUser() {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getUser(token)
        return res
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useGetUser
