import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'

interface FormData {
  products: string[]
  dietaryPreferences: string[]
  description: string
}

function GiverPage() {
  const [formData, setFormData] = useState<FormData>({
    products: [],
    dietaryPreferences: [],
    description: '',
  })

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const productOptions: string[] = [
    'Vegetables',
    'Fruit',
    'Meat',
    'Seafood',
    'Carbs',
    'Eggs',
    'Dairy',
    'Beverages',
    'Snacks (chips, confectionary, crackers etc)',
    'Canned',
    'Baking',
    'Miscellaneous',
  ]

  const dietaryOptions: string[] = [
    'Vegan',
    'Vegetarian',
    'Halal',
    'Gluten Free',
    'Dairy Free',
  ]

  const handleCheckboxChange = (
    category: 'products' | 'dietaryPreferences',
    value: string,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [category]: prevData[category].includes(value)
        ? prevData[category].filter((item) => item !== value)
        : [...prevData[category], value],
    }))
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.split(' ')
    if (words.length <= 50) {
      setFormData({ ...formData, description: e.target.value })
      setError('')
    } else {
      setError('Description cannot exceed 50 words.')
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.description.split(' ').length > 50) {
      setError('Description exceeds 50 words. Please shorten it.')
      return
    }
    console.log('Form Data Submitted:', formData)
    setIsSubmitted(true) // Mark form as submitted
  }

  const handleNext = () => {
    setError('')
    if (currentStep === 3 && formData.description.split(' ').length > 50) {
      setError('Description cannot exceed 50 words.')
      return
    }
    setCurrentStep((prev) => prev + 1)
  }

  const handleBack = () => {
    setError('')
    setCurrentStep((prev) => prev - 1)
  }

  return (
    <div className="m-20 ">
      <div className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-md ">
        {isSubmitted && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            gravity={0.2}
          />
        )}
        {isSubmitted ? (
          // Thank You Message
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Your form has been submitted successfully.
            </p>
            <Link
              to="/" // Adjust this path to your home page route
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Home
            </Link>
          </div>
        ) : (
          // Multi-Step Form
          <form onSubmit={handleSubmit}>
            {/* Step Indicator */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-500">Step {currentStep} of 3</p>
              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-12 rounded-full ${
                      currentStep >= step ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {currentStep === 1 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Which products would you like to include in your basket?
                </h3>
                <div className="space-y-2">
                  {productOptions.map((product, index) => (
                    <div
                      key={`${product}-${index}`}
                      className="flex items-center"
                    >
                      <input
                        type="checkbox"
                        value={product}
                        onChange={() =>
                          handleCheckboxChange('products', product)
                        }
                        checked={formData.products.includes(product)}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label className="ml-2 text-gray-700">{product}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Dietary Preferences
                </h3>
                <div className="space-y-2">
                  {dietaryOptions.map((preference) => (
                    <div key={preference} className="flex items-center">
                      <input
                        type="checkbox"
                        value={preference}
                        onChange={() =>
                          handleCheckboxChange('dietaryPreferences', preference)
                        }
                        checked={formData.dietaryPreferences.includes(
                          preference,
                        )}
                        className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                      />
                      <label className="ml-2 text-gray-700">{preference}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">Description</h3>
                <label className="mb-1 block text-gray-700">
                  Add a description of your basket (max 50 words):
                  <textarea
                    value={formData.description}
                    onChange={handleDescriptionChange}
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring-green-500"
                    rows={4}
                    placeholder="Add a description..."
                  />
                </label>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-6 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-md bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300"
                >
                  Back
                </button>
              )}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  Continue
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default GiverPage
