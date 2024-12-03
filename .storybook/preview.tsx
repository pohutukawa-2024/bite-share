import type { Preview } from '@storybook/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js'
import '../Public/output.css'

const queryClient = new QueryClient()

const withProviders = (Story: any) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  </MemoryRouter>
)

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withProviders],
}

export default preview
