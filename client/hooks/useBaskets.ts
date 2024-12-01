import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { BasketWithId } from '../../models/baskets'
import { getBaskets } from '../apis/baskets'

function useBaskets() {
  const { user, getAccessTokenSilently } = useAuth0()
  // const queryClient = useQueryClient()
  return useQuery<BasketWithId[]>({
    queryKey: ['baskets'],
    queryFn: async () => {
      if (!user?.sub) {
        throw new Error('User is not authenticated')
      }

      const accessToken = await getAccessTokenSilently()
      const response = await getBaskets(accessToken)
      return response
    },
  })
}

export default useBaskets
