import { useState, ChangeEvent, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import useGetUser from '../../hooks/useGetUser'
import useAddBasket from '../../hooks/useAddBasket'

interface FormData {
  description: string
  categories: string[]
  dietaryContent: string[]
  location?: string
  image: string
  status: string
}

function GiverPage() {
  const { data } = useGetUser()
  const addBasket = useAddBasket()

  const [formData, setFormData] = useState<FormData>({
    description: '',
    categories: [],
    dietaryContent: [],
    location: '',
    image: '',
    status: 'active',
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
    'Snacks',
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
    categories: 'categories' | 'dietaryContent',
    value: string,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [categories]: prevData[categories].includes(value)
        ? prevData[categories].filter((item) => item !== value)
        : [...prevData[categories], value],
    }))
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.split(' ')
    if (words.length <= 50) {
      setFormData({
        ...formData,
        description: e.target.value,
        location: data?.user.location,
      })
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

    setIsSubmitted(true) // Mark form as submitted
    const categoriesStr = formData.categories.join(',')
    const dietaryContentStr = formData.dietaryContent.join(',')

    const formToSubmit = {
      categories: categoriesStr,
      dietaryContent: dietaryContentStr,
      description: formData.description,
      image: formData.image,
      location: formData.location,
      status: formData.status,
    }
    addBasket.mutate(formToSubmit)
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
    <div className="m-4 sm:m-8 lg:m-20">
      <div className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-md">
        {isSubmitted && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={500}
            gravity={0.2}
          />
        )}
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Your form has been submitted successfully.
            </p>
            <Link
              to="/"
              className="rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600"
            >
              Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-500">Step {currentStep} of 3</p>
              <div className="flex gap-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 w-12 rounded-full ${
                      currentStep >= step ? 'bg-[#1f2937]' : 'bg-gray-300'
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
                        className="h-4 w-4 accent-slate-700"
                        onChange={() =>
                          handleCheckboxChange('categories', product)
                        }
                        checked={formData.categories.includes(product)}
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
                        className="h-4 w-4 accent-slate-700"
                        onChange={() =>
                          handleCheckboxChange('dietaryContent', preference)
                        }
                        checked={formData.dietaryContent.includes(preference)}
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
                    className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm"
                    rows={4}
                    placeholder="Add a description..."
                  />
                </label>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-full rounded-md bg-gray-200 px-4 py-2 text-gray-600 hover:bg-gray-300 sm:w-auto"
                >
                  Back
                </button>
              )}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full rounded-md bg-[#3e4247] px-4 py-2 text-white hover:bg-[#1f2937] sm:w-auto"
                >
                  Continue
                </button>
              )}
              {currentStep === 3 && (
                <button
                  type="submit"
                  className="w-full rounded-md bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 sm:w-auto"
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
