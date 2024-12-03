import type { Meta, StoryObj } from '@storybook/react'
import RegisterButton from './RegisterButton'
import Background from '../UI/Background'

const meta: Meta<typeof RegisterButton> = {
  title: 'RegisterButton',
  component: RegisterButton,
}

type Story = StoryObj<typeof RegisterButton>

export const RegisterbuttonTest: Story = {
  name: 'registerButton',
  render: () => (
    <Background>
      <RegisterButton />
    </Background>
  ),
}

export default meta
