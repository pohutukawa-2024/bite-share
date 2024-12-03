import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { getNotifications } from '../apis/notifications'

function useGetNotifications() {
  const { user, getAccessTokenSilently } = useAuth0()

  return useQuery({
    queryKey: ['notifications'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getNotifications(token)
        return res
      } else throw new Error('User is not authenticated')
    },
  })
}

export default useGetNotifications
