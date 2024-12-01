import { patchBaskets } from '../apis/baskets'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { PatchBasket } from '../../models/baskets'
import { useQueryClient } from '@tanstack/react-query'

// The mutation function receives an object of the basket id, and status to change
function usePatchBaskets() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (updateBasket: PatchBasket) => {
      if (!user?.sub) {
        throw new Error('User is not authenticated')
      }

      const accessToken = await getAccessTokenSilently()
      const response = await patchBaskets(accessToken, updateBasket)
      return response
    },
    onError: (error) => {
      console.error('Error updating basket:', error)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['baskets', user?.sub] })
    },
  })
}

export default usePatchBaskets
