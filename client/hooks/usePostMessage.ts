import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostMessage } from '../../models/messages'
import { postMessage } from '../apis/messages'

// Inserts new message into DB
function usePostMessage() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (messageObj: PostMessage) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await postMessage(token, messageObj)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: (_, messageObj) => {
      queryClient.invalidateQueries({
        queryKey: ['messages', messageObj.matchesId],
      })
    },
  })
  return mutation
}

export default usePostMessage
