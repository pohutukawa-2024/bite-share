import { useState } from 'react'
import { Profile, ProfileDraft } from '../../../models/users'

interface Props {
  profile?: Profile
  handleSubmit: (profile: Profile | ProfileDraft) => void
}

function AddProfileForm(props: Props) {
  const { handleSubmit, profile } = props
  const [formState, setFormState] = useState({
    username: profile?.username,
    full_name: profile?.full_name,
    email: profile?.email,
    points: 0,
    location: profile?.location,
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
    <>
      <h1>form will be here</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChange}
          name="username"
          id="username"
          type="text"
          placeholder="Enter a username"
          value={formState.username}
        />
        <label htmlFor="full_name">Full Name</label>
        <input
          onChange={handleChange}
          name="full_name"
          id="full_name"
          type="text"
          placeholder="Enter your full name"
          value={formState.full_name}
        />
        <label htmlFor="full_name">Email</label>
        <input
          onChange={handleChange}
          name="email"
          id="email"
          type="text"
          placeholder="Enter your email"
          value={formState.email}
        />
        <label htmlFor="location">Location</label>
        <select onChange={handleChange} name="location" id="location">
          <option value="NorthShore">North Shore</option>
          <option value="EastAuckland">East Auckland</option>
          <option value="WestAuckland">West Auckland</option>
          <option value="SouthAuckland">South Auckland</option>
        </select>
      </form>
    </>
  )
}

export default AddProfileForm
