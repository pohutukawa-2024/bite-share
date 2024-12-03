import { Send } from 'lucide-react'
import { useState } from 'react'

interface Prop {
  onSubmit: (_: string) => void
}

export default function SendBox({ onSubmit }: Prop) {
  const [formState, setFormState] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState(() => '')
    onSubmit(formState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormState(() => value)
  }

  return (
    <div>
      <form
        className="mt-2 flex justify-around rounded-bl-xl rounded-br-xl border border-black bg-gray-100"
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
          className="bg-white-50 m-2 ml-14 w-4/5 rounded-2xl border border-black p-2 text-black"
        />
        <button
          type="submit"
          className="m-2 mr-14 flex items-center justify-evenly rounded-2xl bg-blue-500 px-4 py-2 text-white sm:h-10 sm:w-11 sm:text-xs lg:h-10 lg:w-24 lg:text-sm"
        >
          {' '}
          Send
          <Send />
        </button>
      </form>
    </div>
  )
}
