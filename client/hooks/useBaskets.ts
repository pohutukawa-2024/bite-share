import { useQuery } from '@tanstack/react-query'
import { BasketWithId } from '../../models/baskets'
import { getBaskets } from '../apis/baskets'

function useBaskets() {
  // const queryClient = useQueryClient()
  return useQuery<BasketWithId[]>({
    queryKey: ['baskets'],
    queryFn: async () => {
      const response = await getBaskets()
      return response
    },
  })
}

export default useBaskets
