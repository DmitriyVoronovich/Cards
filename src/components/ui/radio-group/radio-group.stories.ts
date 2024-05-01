import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupComponent } from './'

const meta = {
  argTypes: {},
  component: RadioGroupComponent,
  tags: ['autodocs'],
  title: 'Components/RadioGroupComponent',
} satisfies Meta<typeof RadioGroupComponent>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroup: Story = {
  args: {},
}
