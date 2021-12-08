import React from 'react'

import type { IconProps } from './types'

const IconSettings = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M19.808 13.024c.039-.328.065-.67.065-1.024s-.026-.696-.079-1.024l2.218-1.732a.542.542 0 0 0 .132-.67l-2.1-3.635a.534.534 0 0 0-.643-.236l-2.612 1.05a7.691 7.691 0 0 0-1.772-1.024l-.394-2.783a.524.524 0 0 0-.525-.446h-4.2a.51.51 0 0 0-.512.446L8.993 4.73A7.895 7.895 0 0 0 7.22 5.753l-2.612-1.05a.52.52 0 0 0-.643.236l-2.1 3.635a.509.509 0 0 0 .13.67l2.219 1.732A6.597 6.597 0 0 0 4.123 12c0 .341.026.696.079 1.024l-2.218 1.732a.542.542 0 0 0-.131.67l2.1 3.635c.13.237.406.315.643.237l2.612-1.05a7.69 7.69 0 0 0 1.771 1.023l.394 2.783a.534.534 0 0 0 .525.446h4.2a.502.502 0 0 0 .512-.446l.394-2.783a7.897 7.897 0 0 0 1.772-1.023l2.611 1.05c.237.091.512 0 .644-.237l2.1-3.635a.509.509 0 0 0-.132-.67l-2.191-1.732Zm-7.81 2.914A3.95 3.95 0 0 1 8.061 12a3.95 3.95 0 0 1 3.937-3.937A3.949 3.949 0 0 1 15.936 12a3.949 3.949 0 0 1-3.938 3.938Z'
        fill={color}
      />
    </svg>
  )
}

export default IconSettings
