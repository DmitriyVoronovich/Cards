import * as Checkbox from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export const CheckboxComponent = () => (
  <form>
    <div className={s.checkbox_wrapper} style={{ alignItems: 'center', display: 'flex' }}>
      <Checkbox.Root className={s.checkbox_root} defaultChecked id={'c1'}>
        <Checkbox.Indicator className={s.checkbox_indicator} />
      </Checkbox.Root>
      <label className={s.label} htmlFor={'c1'}>
        name
      </label>
    </div>
  </form>
)
