import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostBasket } from '../../models/baskets'
import { addBasket } from '../apis/baskets'

// Adds new basket to DB
export default function useAddBasket() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (basket: PostBasket) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await addBasket(token, basket)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['baskets'],
      })
    },
  })

  return mutation
}
