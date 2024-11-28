import { useState, ChangeEvent, FormEvent } from 'react'

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
    setFormData({ ...formData, description: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form Data Submitted:', formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg rounded-md bg-white p-6 shadow-md"
    >
      <h3 className="mb-4 text-xl font-semibold">
        Which of the products you like to include in your basket:
      </h3>

      <div className="space-y-2">
        {productOptions.map((product, index) => (
          <div key={`${product}-${index}`} className="flex items-center">
            <input
              type="checkbox"
              value={product}
              onChange={() => handleCheckboxChange('products', product)}
              checked={formData.products.includes(product)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="ml-2 text-gray-700">{product}</label>
          </div>
        ))}
      </div>

      <h4 className="mb-2 mt-6 text-lg font-medium">Dietary Preferences</h4>
      <div className="space-y-2">
        {dietaryOptions.map((preference) => (
          <div key={preference} className="flex items-center">
            <input
              type="checkbox"
              value={preference}
              onChange={() =>
                handleCheckboxChange('dietaryPreferences', preference)
              }
              checked={formData.dietaryPreferences.includes(preference)}
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />
            <label className="ml-2 text-gray-700">{preference}</label>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-gray-700">
          Description
          <textarea
            value={formData.description}
            onChange={handleDescriptionChange}
            className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring-green-500"
            rows={4}
            placeholder="Add a description..."
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-green-600 px-6 py-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  )
}

export default GiverPage
