import { Icon } from '@/components/icon/Icon'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown_menu_component.module.scss'

export const DropdownMenuComponent = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button aria-label={'Customise options'} className={s.dropdown_button}>
        <Icon height={'18'} iconId={'menu'} viewBox={'0 0 18 18'} width={'18'} />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align={'end'}
        alignOffset={-6.5}
        className={s.DropdownMenuContent}
        sideOffset={10}
      >
        <DropdownMenu.Item className={s.DropdownMenuItem}>
          New Tab <div className={s.RightSlot}>⌘+T</div>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={s.DropdownMenuItem}>
          New Window <div className={s.RightSlot}>⌘+N</div>
        </DropdownMenu.Item>
        <DropdownMenu.Item className={s.DropdownMenuItem} disabled>
          New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
        </DropdownMenu.Item>

        <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
