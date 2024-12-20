// @vitest-environment jsdom

import { afterEach } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import '@testing-library/jest-dom/vitest'

import routes from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

afterEach(cleanup)

export function renderComponent(component: JSX.Element) {
  const user = userEvent.setup()
  return { user, ...render(component) }
}

export function renderWithRouter(location = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [location],
  })

  userEvent.setup()
  return render(<RouterProvider router={router} />)
}

export function renderWithQuery(component: JSX.Element, location = '/') {
  const router = createMemoryRouter(
    createRoutesFromElements(<Route path={location} element={component} />),
    {
      initialEntries: [location || '/'],
    },
  )

  const user = userEvent.setup()
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return {
    user,
    ...render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>,
    ),
  }
}
