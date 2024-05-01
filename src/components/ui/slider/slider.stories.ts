import type { Meta, StoryObj } from '@storybook/react'

import { SliderComponent } from './'

const meta = {
  argTypes: {},
  component: SliderComponent,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof SliderComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
