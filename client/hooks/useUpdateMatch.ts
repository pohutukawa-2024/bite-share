import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EditStatus } from '../../models/matches'
import { updateMatch } from '../apis/matches'

// Changes a match status
function useUpdateMatch() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (updateStatus: EditStatus) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await updateMatch(token, updateStatus)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['matches'] })
    },
  })

  return mutation
}

export default useUpdateMatch
