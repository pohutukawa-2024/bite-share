import { useEffect, useState } from 'react'
import useAddProfile from '../../hooks/useAddProfile'
import useUpdateUser from '../../hooks/useUpdateUser'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const { data, isLoading, isError } = useAddProfile()
  const editProfile = useUpdateUser()
  const navigate = useNavigate()

  const [formState, setFormState] = useState({
    username: '',
    fullName: '',
    email: '',
    location: '',
  })
  useEffect(() => {
    if (data) {
      setFormState({
        username: data.user.username || '',
        fullName: data.user.fullName || '',
        email: data.user.email || '',
        location: data.user.location || '',
      })
    }
  }, [data])

  if (isLoading) return <div>Loading....</div>
  if (isError) return <div>Sorry, an error has occurred</div>

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState)
    editProfile.mutate(formState)
    navigate('/')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    data && (
      <div className="flex justify-center">
        <div className="mt-16 w-full max-w-xl rounded-lg bg-gray-50 p-8  shadow-md">
          <h1 className="mb-8 text-center text-xl font-bold text-gray-700">
            Edit Profile
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <section className="flex flex-col space-y-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600"
              >
                Username
              </label>
              <input
                className="rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
                onChange={handleChange}
                name="username"
                id="username"
                type="text"
                value={formState.username}
              />
            </section>
            <section className="flex flex-col space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                className="rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
                onChange={handleChange}
                name="fullName"
                id="fullName"
                type="text"
                value={formState.fullName}
              />
            </section>
            <section className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                className="rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
                onChange={handleChange}
                name="email"
                id="email"
                type="text"
                value={formState.email}
              />
            </section>
            <section>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-medium text-gray-600"
              >
                Location
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  'North Shore',
                  'West Auckland',
                  'East Auckland',
                  'South Auckland',
                ].map((location) => (
                  <label key={location} className="flex items-center gap-2">
                    <input
                      onChange={handleChange}
                      type="radio"
                      name="location"
                      value={location}
                      className="h-4 w-4 accent-yellow-700"
                      checked={formState.location === location}
                    />
                    {location}
                  </label>
                ))}
              </div>
            </section>
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 active:bg-yellow-700"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    )
  )
}

export default ProfilePage
