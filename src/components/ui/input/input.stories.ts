import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/components/ui/input/input'

const meta = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const InputSearch: Story = {
  args: {
    disabled: false,
    error: false,
    placeholder: 'input search',
  },
}

export const InputError: Story = {
  args: {
    error: true,
    placeholder: 'input search',
  },
}
