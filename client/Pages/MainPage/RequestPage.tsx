import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/Select'

import useBaskets from '../../hooks/useBaskets'
import usePatchBaskets from '../../hooks/usePatchBaskets'
import { useQueryClient } from '@tanstack/react-query'

function RequestPage() {
  const { data: givers, isLoading, isError } = useBaskets()
  const queryClient = useQueryClient()
  const updateBasket = usePatchBaskets()

  function handleRequest(giverId: number) {
    console.log(`Request sent for ${giverId}`)
    updateBasket.mutate(
      { giverId, status: 'pending' },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['baskets']) // Refetch baskets
        },
        onError: (err) => {
          console.error('Error updating basket:', err)
          alert('Failed to update basket. Please try again.')
        },
      },
    )
  }

  if (isLoading) return <p>Loading baskets...</p>
  if (isError) return <p>Error loading baskets.</p>

  return (
    <div className="flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="mb-6 flex w-full max-w-4xl items-center justify-between">
        <h1 className="flex-1 text-center text-2xl font-semibold">
          Request a Basket
        </h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="north-shore">North Shore</SelectItem>
              <SelectItem value="west-auckland">West Auckland</SelectItem>
              <SelectItem value="east-auckland">East Auckland</SelectItem>
              <SelectItem value="south-auckland">South Auckland</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-10">
        <div className="mr-auto flex w-full flex-col justify-center gap-10">
          {givers
            ?.filter((basket) => basket.status === 'active')
            .map((giver, index) => (
              <div
                key={index}
                className="flex items-start rounded-3xl bg-zinc-100 p-6 shadow-md"
              >
                {/* <img
              src={giver.imageUrl}
              alt="Basket"
              className="object-cover mr-4 rounded-full h-28 w-28"
            /> */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{giver.userId}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Description:</strong> {giver.description}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Basket:</strong> {giver.categories}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Dietary Preferences:</strong>{' '}
                    {giver.dietary_content}
                  </p>
                </div>
                <button
                  onClick={() => handleRequest(giver.id)}
                  className="ml-4 rounded-md bg-primary px-4 py-2 text-black hover:bg-[#e0b143]"
                >
                  Request
                </button>
              </div>
            ))}
        </div>
        <div className="h-56 rounded-3xl bg-zinc-100 p-2 shadow-md">
          <img
            src="/images/dietary.png"
            alt="Dietary Information"
            height="100px"
            width="200px"
          />
        </div>
      </div>
    </div>
  )
}

export default RequestPage
