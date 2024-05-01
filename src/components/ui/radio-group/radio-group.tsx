import * as RadioGroup from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

export const RadioGroupComponent = () => (
  <form>
    <RadioGroup.Root
      aria-label={'View density'}
      className={s.radio_group_wrapper}
      defaultValue={'default'}
    >
      <div className={s.item_wrapper}>
        <RadioGroup.Item className={s.radio_item} id={'r1'} value={'default'}>
          <RadioGroup.Indicator className={s.radio_indicator} />
        </RadioGroup.Item>
        <label className={s.label} htmlFor={'r1'}>
          Default
        </label>
      </div>
      <div className={s.item_wrapper}>
        <RadioGroup.Item className={s.radio_item} id={'r2'} value={'comfortable'}>
          <RadioGroup.Indicator className={s.radio_indicator} />
        </RadioGroup.Item>
        <label className={s.label} htmlFor={'r2'}>
          Comfortable
        </label>
      </div>
      <div className={s.item_wrapper}>
        <RadioGroup.Item className={s.radio_item} id={'r3'} value={'compact'}>
          <RadioGroup.Indicator className={s.radio_indicator} />
        </RadioGroup.Item>
        <label className={s.label} htmlFor={'r3'}>
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  </form>
)
