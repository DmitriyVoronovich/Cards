import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

export const SelectComponent = () => {
  return (
    <Select.Root>
      <Select.Trigger className={s.select_trigger}>
        <Select.Value className={s.select_value} placeholder={'Select box1'} />
        <ChevronDownIcon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={s.select_content}
          position={'popper'}
          side={'bottom'}
          sideOffset={-6}
        >
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Item className={s.select_item} value={'Select box1'}>
              <Select.ItemText>Select box3</Select.ItemText>
            </Select.Item>
            <Select.Item className={s.select_item} value={'Select box2'}>
              <Select.ItemText>Select box2</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
