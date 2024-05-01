import React from 'react'

import iconsSprite from '../../accets/icon-sprite.svg'

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      fill={'none'}
      height={props.height || '50'}
      viewBox={props.viewBox || '0 0 120 120'}
      width={props.width || '50'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}

export type IconPropsType = {
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}
