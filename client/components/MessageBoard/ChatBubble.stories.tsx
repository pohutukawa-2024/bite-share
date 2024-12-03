import type { Meta, StoryObj } from '@storybook/react'
import ChatBubble from './ChatBubble'
import { MatchBubble } from '../../../models/matches'
import Background from '../UI/Background'

const meta: Meta<typeof ChatBubble> = {
  title: 'ChatBubble',
  component: ChatBubble,
}

type Story = StoryObj<typeof ChatBubble>

const transformedData: MatchBubble[] = [
  {
    matchId: 0,
    otherFullName: '',
    otherId: '',
    otherUsername: 'Cookie Monster',
    basketId: 0,
  },
  {
    matchId: 0,
    otherFullName: '',
    otherId: '',
    otherUsername: 'Big Bird',
    basketId: 0,
  },
]

const handleClick = () => {}

export const ChatBubbleStoryBook: Story = {
  name: 'chatBubble',
  render: () => (
    <Background>
      <ChatBubble data={transformedData} onClick={handleClick} />
    </Background>
  ),
}

export default meta
