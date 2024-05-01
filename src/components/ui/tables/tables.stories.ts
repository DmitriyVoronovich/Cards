import type { Meta, StoryObj } from '@storybook/react'

import { Table } from '@/components/ui/tables/tables'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableDemo: Story = {
  args: {},
}
