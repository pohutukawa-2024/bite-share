import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EditUser } from '../../models/users'
import { updateUser } from '../apis/user'

function useUpdateUser() {
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (form: EditUser) => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        await updateUser(form, token)
      } else throw new Error('User is not authenticated')
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })
  return mutation
}

export default useUpdateUser
