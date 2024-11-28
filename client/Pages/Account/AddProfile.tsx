import { useAuth0 } from '@auth0/auth0-react'

import { Profile, ProfileDraft } from '../../../models/users'
import useAddProfile from '../../hooks/useAddProfile'
import AddProfileForm from '../../components/Forms/AddProfileForm'

function AddProfile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, mutation } = useAddProfile()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: ProfileDraft | Profile) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
  }

  return (
    <div>
      This will be where users will be redirected after creating an account on
      auth0
      <AddProfileForm handleSubmit={handleSubmit} profile={data} />
    </div>
  )
}

export default AddProfile
