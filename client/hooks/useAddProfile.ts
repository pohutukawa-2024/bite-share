import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { getUser, upsertProfile } from '../apis/user'
import { Profile, ProfileDraft } from '../../models/users'

function useAddProfile() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(accessToken)
        return response
      } else throw new Error('User is not authenticated')
    },
  })

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: ProfileDraft | Profile
      token: string
    }) => upsertProfile(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/')
    },
  })

  return { data, isLoading, isError, mutation }
}

export default useAddProfile
