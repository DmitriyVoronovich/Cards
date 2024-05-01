import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckboxComponent } from '@/components/ui/checkbox'
import { DropdownMenuComponent } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { RadioGroupComponent } from '@/components/ui/radio-group'
import { SelectComponent } from '@/components/ui/select'
import { SliderComponent } from '@/components/ui/slider'
import { Table } from '@/components/ui/tables'
import { TabsComponent } from '@/components/ui/tabs/tabs'

export function App() {
  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Button fullWidth={false} style={{ width: '100px' }} variant={'primary'}>
        Click
      </Button>
      <Input error={false} placeholder={'input'} />
      <TabsComponent />
      <Table />
      <CheckboxComponent />
      <SelectComponent />
      <Card />
      <SliderComponent />
      <Pagination currentPage={2} pageSize={5} totalPages={10} />
      <DropdownMenuComponent />
      <RadioGroupComponent />
    </div>
  )
}
