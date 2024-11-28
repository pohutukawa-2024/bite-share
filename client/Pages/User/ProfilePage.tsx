import { useEffect, useState } from 'react'
import useAddProfile from '../../hooks/useAddProfile'

function ProfilePage() {
  const { data, isLoading } = useAddProfile()

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
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    data && (
      <div className="flex justify-center">
        <div className="m-20 w-1/3 flex-row justify-center rounded-md bg-gray-200">
          <h1>Edit Profile</h1>
          <p>{data.fullName}</p>
          <p>{data.location}</p>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <label htmlFor="username">Username: </label>
              <input
                onChange={handleChange}
                name="username"
                id="username"
                type="text"
                value={formState.username}
              />
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ProfilePage
