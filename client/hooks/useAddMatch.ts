import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addMatch } from '../apis/matches'
import { PostMatch } from '../../models/matches'

// Adds new match between two users to the DB
export default function useAddMatch() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (postMatch: PostMatch) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await addMatch(token, postMatch)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['matches'],
      })
    },
  })

  return mutation
}
