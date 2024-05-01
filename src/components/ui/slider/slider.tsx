import { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

export const SliderComponent = () => {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(14)

  const onChange = (e: number[]) => {
    setMinValue(e[0])
    setMaxValue(e[1])
  }

  return (
    <div className={s.slider_wrapper}>
      <div className={s.slider_value}>{minValue}</div>
      <Slider.Root
        className={s.slider_root}
        defaultValue={[0, 14]}
        max={14}
        onValueChange={onChange}
      >
        <Slider.Track className={s.slider_track}>
          <Slider.Range className={s.slider_range} />
        </Slider.Track>
        <Slider.Thumb className={s.slider_thumb} />
        <Slider.Thumb className={s.slider_thumb} />
      </Slider.Root>
      <div className={s.slider_value}>{maxValue}</div>
    </div>
  )
}
