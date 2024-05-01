import { ComponentPropsWithoutRef } from 'react'

import s from './input.module.scss'

export type InputProps = {
  error: boolean
  placeholder: string
} & ComponentPropsWithoutRef<'input'>

export const Input = (props: InputProps) => {
  const { error, placeholder, ...rest } = props

  return (
    <input
      placeholder={placeholder}
      {...rest}
      className={`${s.input} ${error ? s.error : ''}`}
      type={'text'}
    />
  )
}
