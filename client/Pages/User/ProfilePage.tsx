import { useState } from 'react'
import useAddProfile from '../../hooks/useAddProfile'

function ProfilePage() {
  const { data, isLoading } = useAddProfile()
  // const [formState, setFormState] = useState({
  //   username: data?.username,
  //   fullName: data?.fullName,
  //   email: data?.email,
  //   location: data?.location,
  // })

  if (isLoading) return <div>Loading....</div>

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    data && (
      <div className="flex justify-center">
        <div className="m-20 w-1/3 flex-row justify-center rounded-md bg-gray-200">
          <h1>Edit Profile</h1>
          <p>{data.fullName}</p>
          <form onSubmit={handleSubmit}></form>
        </div>
      </div>
    )
  )
}

export default ProfilePage
