import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../ui/Select'

// GiverData Example Array
export const GiverData = [
  {
    name: 'John Doe',
    description: 'Fresh organic vegetables and fruits.',
    basketItems: ['Vegetables', 'Fruits'],
    dietaryPreferences: ['Vegan', 'Gluten Free'],
    imageUrl: 'Public/images/vegan.png',
  },
  {
    name: 'John Doe',
    description: 'Fresh organic vegetables and fruits.',
    basketItems: ['Vegetables', 'Fruits'],
    dietaryPreferences: ['Vegan', 'Gluten Free'],
    imageUrl: 'Public/images/vegan.png',
  },
  {
    name: 'John Doe',
    description: 'Fresh organic vegetables and fruits.',
    basketItems: ['Vegetables', 'Fruits'],
    dietaryPreferences: ['Vegan', 'Gluten Free'],
    imageUrl: 'Public/images/vegan.png',
  },
]

interface Giver {
  name: string
  description: string
  basketItems: string[]
  dietaryPreferences: string[]
  imageUrl: string
}

interface RequestPageProps {
  givers: Giver[]
}

// RequestPage Component
function RequestPage({ givers }: RequestPageProps) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Loaction" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>Area</SelectLabel> */}
            <SelectItem value="apple">North Shore</SelectItem>
            <SelectItem value="banana">West Auckland</SelectItem>
            <SelectItem value="blueberry">East Auckland</SelectItem>
            <SelectItem value="grapes">South Auckland</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-row  justify-center  gap-10 bg-gray-100 p-6">
        <br />
        <div className="flex flex-col gap-6">
          {givers.map((giver, index) => (
            <div
              key={index}
              className="flex items-start rounded-md bg-white p-6 shadow-md"
            >
              <img
                src={giver.imageUrl}
                alt="Basket"
                className="mr-4 h-24 w-24 rounded-full object-cover"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{giver.name}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Description:</strong> {giver.description}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Basket:</strong> {giver.basketItems.join(', ')}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  <strong>Dietary Preferences:</strong>{' '}
                  {giver.dietaryPreferences.join(', ')}
                </p>
              </div>
              <button className="bg-primary ml-4 rounded-md px-4 py-2 text-black hover:bg-[#f08c00]">
                Request
              </button>
            </div>
          ))}
        </div>
        <div className="flex w-48 rounded-md bg-white p-4 shadow-md">
          dddddssssssssssssss
        </div>
      </div>
    </div>
  )
}

export default RequestPage
