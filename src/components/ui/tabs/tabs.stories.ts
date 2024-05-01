import type { Meta, StoryObj } from '@storybook/react'

import { TabsComponent } from './'

const meta = {
  component: TabsComponent,
} satisfies Meta<typeof TabsComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
