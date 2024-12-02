import { useAuth0 } from '@auth0/auth0-react'
import { Profile, ProfileDraft } from '../../../models/users'
import useAddProfile from '../../hooks/useAddProfile'
import AddProfileForm from '../../components/Forms/AddProfileForm'

function AddProfile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  const { data, isLoading, postMutation } = useAddProfile()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated && !user) {
    return <div>Not authenticated</div>
  }

  async function handleSubmit(form: ProfileDraft | Profile) {
    const token = await getAccessTokenSilently()
    postMutation.mutate({ form, token })
  }

  return (
    <div>
      <h1 className="mb-6 mt-6 text-center text-2xl font-bold text-gray-800">
        Welcome to Your Profile Setup
      </h1>
      <AddProfileForm handleSubmit={handleSubmit} profile={data?.user} />
    </div>
  )
}

export default AddProfile
