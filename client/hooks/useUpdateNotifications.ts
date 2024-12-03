import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateNotifications } from '../apis/notifications'

// Updates status of messages to read
function useUpdateNotifications() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (matchId: number) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await updateNotifications(token, matchId)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
    },
  })

  return mutation
}

export default useUpdateNotifications
