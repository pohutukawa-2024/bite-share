import { useState } from 'react'

interface Prop {
  onSubmit: (_: string) => void
}

export default function SendBox({ onSubmit }: Prop) {
  const [formState, setFormState] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(formState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormState(() => value)
  }

  return (
    <div>
      <form
        className="flex justify-around rounded-bl-lg rounded-br-lg bg-gray-100"
        onSubmit={handleSubmit}
      >
        <label htmlFor="message" className="hidden">
          Message Input
        </label>
        <input
          onChange={handleChange}
          name="message"
          id="message"
          type="text"
          placeholder="Enter message"
          value={formState}
          className="m-2 w-4/5 rounded-lg bg-cyan-200 p-2"
        />
        <button
          type="submit"
          className="m-2 h-16 w-16 rounded-full bg-cyan-200"
        >
          Send
        </button>
      </form>
    </div>
  )
}
