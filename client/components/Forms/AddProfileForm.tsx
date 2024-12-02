import { useState } from 'react'
import { Profile, ProfileDraft } from '../../../models/users'

interface Props {
  profile?: Profile
  handleSubmit: (profile: Profile | ProfileDraft) => void
}

function AddProfileForm(props: Props) {
  const { handleSubmit, profile } = props
  const [formState, setFormState] = useState({
    username: profile?.username || '',
    fullName: profile?.fullName || '',
    email: profile?.email || '',
    points: 0,
    location: profile?.location || '',
    icon: '',
  })

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    handleSubmit(formState)
  }

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="mx-auto w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
        Profile Form
      </h1>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            name="username"
            id="username"
            type="text"
            placeholder="Enter a username"
            value={formState.username}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            onChange={handleChange}
            name="fullName"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formState.fullName}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            id="email"
            type="text"
            placeholder="Enter your email"
            value={formState.email}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="location"
            className="text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <select
            onChange={handleChange}
            name="location"
            id="location"
            value={formState.location}
            className="w-full rounded-md border border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
          >
            <option value="NorthShore">North Shore</option>
            <option value="EastAuckland">East Auckland</option>
            <option value="WestAuckland">West Auckland</option>
            <option value="SouthAuckland">South Auckland</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 active:bg-yellow-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProfileForm
