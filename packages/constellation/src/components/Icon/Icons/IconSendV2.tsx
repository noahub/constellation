import React from 'react'

import type { IconProps } from './types'

const IconSend = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        d='M15.782 13.862H12.75a.75.75 0 0 1-.691-.427.658.658 0 0 1-.059-.272v-2.329a.658.658 0 0 1 .104-.355.76.76 0 0 1 .646-.344h5.251V7.582c0-.518.672-.777 1.066-.41l4.757 4.428a.537.537 0 0 1 0 .795l-4.757 4.433c-.394.367-1.066.108-1.066-.41v-2.556h-2.219Zm-3.032 1h2.723a8 8 0 1 1-.001-5.726H12.75c-.9 0-1.75.693-1.75 1.698v2.329c0 1.005.85 1.699 1.75 1.699Z'
        fill={color}
      />
    </svg>
  )
}

export default IconSend
