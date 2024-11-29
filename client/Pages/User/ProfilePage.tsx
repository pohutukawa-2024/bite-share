import { useEffect, useState } from 'react'
import useAddProfile from '../../hooks/useAddProfile'
import useUpdateUser from '../../hooks/useUpdateUser'

function ProfilePage() {
  const { data, isLoading } = useAddProfile()
  const editProfile = useUpdateUser()

  const [formState, setFormState] = useState({
    username: '',
    fullName: '',
    email: '',
    location: '',
  })
  useEffect(() => {
    if (data) {
      setFormState({
        username: data.username || '',
        fullName: data.fullName || '',
        email: data.email || '',
        location: data.location || '',
      })
    }
  }, [data])

  if (isLoading) return <div>Loading....</div>

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState)
    editProfile.mutate(formState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    data && (
      <div className="flex justify-center">
        <div className="m-20 flex w-1/3 flex-col items-center justify-center rounded-md bg-gray-100 p-3">
          <h1 className="mb-8 mt-3">Edit Profile</h1>
          <p>{data.fullName}</p>
          <p>{data.location}</p>

          <form onSubmit={handleSubmit} className="flex flex-col">
            <section className="flex items-center gap-2 p-0.5">
              <label htmlFor="username">Username: </label>
              <input
                className="ml-5 rounded-md border-2 border-gray-600 bg-gray-300 p-0.5"
                onChange={handleChange}
                name="username"
                id="username"
                type="text"
                value={formState.username}
              />
            </section>
            <section className="flex items-center gap-2 p-0.5">
              <label htmlFor="fullName">Full Name: </label>
              <input
                className="ml-6 rounded-md border-2 border-gray-600 bg-gray-300 p-0.5"
                onChange={handleChange}
                name="fullName"
                id="fullName"
                type="text"
                value={formState.fullName}
              />
            </section>
            <section className="flex items-center gap-2 p-0.5">
              <label htmlFor="email">Email: </label>
              <input
                className="ml-14 rounded-md border-2 border-gray-600 bg-gray-300 p-0.5"
                onChange={handleChange}
                name="email"
                id="email"
                type="text"
                value={formState.email}
              />
            </section>
            <section className="flex flex-wrap">
              <label htmlFor="location" className="w-1/6">
                Location
              </label>
              <div className="w-5/6">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="location"
                  id="location"
                  value="North Shore"
                  className="m-2"
                />
                North Shore
                <input
                  onChange={handleChange}
                  type="radio"
                  name="location"
                  id="location"
                  value="West Auckland"
                  className="m-2"
                />
                West Auckland
                <input
                  onChange={handleChange}
                  type="radio"
                  name="location"
                  id="location"
                  value="East Auckland"
                  className="m-2"
                />
                East Auckland
                <input
                  onChange={handleChange}
                  type="radio"
                  name="location"
                  id="location"
                  value="South Auckland"
                  className="m-2"
                />
                South Auckland
              </div>
            </section>
            <button
              type="submit"
              className="w-24 rounded-md bg-green-600 text-white"
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
