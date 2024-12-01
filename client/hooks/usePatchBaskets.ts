import { patchBaskets } from '../apis/baskets'
import { useMutation } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { Basket, PatchBasket } from '../../models/baskets'

function usePatchBaskets() {
  const { user, getAccessTokenSilently } = useAuth0()

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
    onSuccess: (data) => {
      console.log('Basket updated successfully:', data)
    },
  })
}

export default usePatchBaskets
