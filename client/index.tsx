import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import GlobalLoader from './components/GlobalLoader.tsx'

const router = createBrowserRouter(routes)
const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    /**
     * TODO: replace domain, clientId, and audience
     */
    <Auth0Provider
      domain="pohutukawa-bite-share.au.auth0.com"
      clientId="z1tapSJtCk3kgFdgfyurwVqA6yI1QhrZ"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: 'https://bite-share/api',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <GlobalLoader />
          <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0Provider>,
  )
})
