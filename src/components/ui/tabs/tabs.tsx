import { Button } from '@/components/ui/button'
import * as Tabs from '@radix-ui/react-tabs'

import s from './tabs.module.scss'

export const TabsComponent = () => (
  <Tabs.Root className={'TabsRoot'} defaultValue={'tab1'}>
    <Tabs.List className={'TabsList'}>
      <Tabs.Trigger className={s.tabs_trigger} value={'tab1'}>
        Switcher
      </Tabs.Trigger>
      <Tabs.Trigger className={s.tabs_trigger} value={'tab3'}>
        Switcher2
      </Tabs.Trigger>
      <Tabs.Trigger className={s.tabs_trigger} value={'tab4'}>
        Switcher3
      </Tabs.Trigger>
      <Tabs.Trigger className={s.tabs_trigger} value={'tab5'}>
        Switcher4
      </Tabs.Trigger>
      <Tabs.Trigger className={s.tabs_trigger} value={'tab6'}>
        Switcher5
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className={'TabsContent'} value={'tab1'}>
      <Button variant={'secondary'}>Hello</Button>
    </Tabs.Content>
  </Tabs.Root>
)
