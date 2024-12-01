import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function KohaPage() {
  const [customAmount, setCustomAmount] = useState<string>('')
  const navigate = useNavigate()

  const handleDonateClick = () => {
    alert(
      `Thank you for donating ${customAmount ? `$${customAmount}` : 'your chosen amount'}!`,
    )
    navigate('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center  p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          Support Our Cause
        </h1>
        <p className="mb-6 text-gray-600">
          Your contributions help us keep going. Every bit counts!
        </p>

        {/* Predefined Donation Options */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          {['5', '10', '20', '50'].map((amount) => (
            <button
              key={amount}
              className="rounded bg-gray-200 py-2 font-medium text-gray-800 hover:bg-gray-300"
              onClick={() => setCustomAmount(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="number"
          placeholder="Enter Custom Amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="mb-6 w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Fake PayPal Button */}
        <button
          onClick={handleDonateClick}
          className="rounded bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
        >
          Donate via PayPal
        </button>
      </div>
    </div>
  )
}

export default KohaPage
