import { Outlet, useLocation } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import Header from '../Pages/Header/Header'

export default function Layout() {
  const location = useLocation()
  const queryClient = useQueryClient()

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['notifications'] })
  }, [location, queryClient])

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  )
}
