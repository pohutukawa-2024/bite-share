import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getUserBaskets } from '../apis/baskets'

function useGetUserBaskets() {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['baskets', user?.sub],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getUserBaskets(token)
        return res
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useGetUserBaskets
