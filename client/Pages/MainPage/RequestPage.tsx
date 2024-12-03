import { useState } from 'react'
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
import useAddMatch from '../../hooks/useAddMatch'
import { Link, useNavigate } from 'react-router-dom'
import Leaderboard from '../../components/Leaderboard'
import ErrorPage from '../../components/ErrorPage'

const dietaryImages = {
  Vegan: 'Public/images/vegan.png',
  Vegetarian: 'Public/images/vegetarian.png',
  GlutenFree: 'Public/images/glutenFree.png',
  DiaryFree: 'Public/images/diaryFree.png',
  Halal: 'Public/images/meat.png',
  Default: 'Public/images/vegetarian.png',
}

function RequestPage() {
  const { data: givers, isLoading, isError } = useBaskets()
  const queryClient = useQueryClient()
  const updateBasket = usePatchBaskets()
  const addMatch = useAddMatch()
  const navigate = useNavigate()

  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedDietary, setSelectedDietary] = useState('all')

  function handleRequest({
    giverId,
    basketId,
  }: {
    giverId: string
    basketId: number
  }) {
    console.log(`Request sent for ${giverId}`)

    updateBasket.mutate(
      { basketId, status: 'pending' },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ['baskets'],
          }) // Refetch baskets
        },
        onError: (err) => {
          console.error('Error updating basket:', err)
          alert('Failed to update basket. Please try again.')
        },
      },
    )
    addMatch.mutate({ giverId, basketId })
    navigate('/matches')
  }

  if (isLoading) return <p>Loading baskets...</p>
  if (isError) return <ErrorPage />

  // Filtering logic
  const filteredGivers = givers?.filter((giver) => {
    const matchesLocation =
      selectedLocation === 'all' || giver.location === selectedLocation

    const matchesDietary =
      selectedDietary === 'all' ||
      (giver.dietaryContent &&
        giver.dietaryContent.split(',').includes(selectedDietary))

    return giver.status === 'active' && matchesLocation && matchesDietary
  })

  return (
    <div className="flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="mb-6 flex w-full max-w-5xl items-center justify-between">
        <h1 className="flex-1 text-center text-2xl font-semibold">
          Request a Basket
        </h1>
        <Select onValueChange={(value) => setSelectedLocation(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location Preferences" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="North Shore">North Shore</SelectItem>
              <SelectItem value="West Auckland">West Auckland</SelectItem>
              <SelectItem value="East Auckland">East Auckland</SelectItem>
              <SelectItem value="South Auckland">South Auckland</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Dietary Dropdown */}
        <Select onValueChange={(value) => setSelectedDietary(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Dietary Preferences" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Preferences</SelectItem>
              <SelectItem value="Vegan">Vegan</SelectItem>
              <SelectItem value="Vegetarian">Vegetarian</SelectItem>
              <SelectItem value="GlutenFree">Gluten-Free</SelectItem>
              <SelectItem value="DiaryFree">Diary-Free</SelectItem>
              <SelectItem value="Halal">Halal</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Givers List */}
      <div className="flex gap-10">
        <div className="mr-auto flex w-full flex-col justify-center gap-8">
          {filteredGivers?.map((giver, index) => {
            const dietaryList = giver.dietaryContent?.split(',') || []
            const imageSrc =
              dietaryList.length > 0
                ? dietaryImages[dietaryList[0].trim()] || dietaryImages.Default
                : dietaryImages.Default

            return (
              <div
                key={index}
                className="flex items-start rounded-3xl bg-zinc-100 p-6 shadow-md"
              >
                {/* Use the dynamic image source */}
                <img
                  src={imageSrc}
                  alt="Dietary Preference"
                  className="h-36 w-36 rounded object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">
                    <Link to={`/profile/${giver.username}`}>
                      {giver.username}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Description:</strong> {giver.description}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Basket:</strong>{' '}
                    {giver.categories
                      ? giver.categories.replace(',', ', ')
                      : 'No dietary preferences available'}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    <strong>Dietary Preferences:</strong>{' '}
                    {giver.dietaryContent
                      ? giver.dietaryContent.replace(',', ', ')
                      : 'No dietary preferences available'}
                  </p>
                </div>
                <button
                  onClick={() =>
                    handleRequest({ giverId: giver.userId, basketId: giver.id })
                  }
                  className="ml-4 rounded-md bg-primary px-4 py-2 text-black hover:bg-[#e0b143]"
                >
                  Request
                </button>
              </div>
            )
          })}
        </div>
        <div className="h-48 w-[350px] rounded-3xl bg-zinc-100 p-1 shadow-md">
          <img
            src="Public/images/dietary.png"
            alt="Dietary Information"
            width="180px"
          />

          <Leaderboard />
        </div>
      </div>
    </div>
  )
}

export default RequestPage
