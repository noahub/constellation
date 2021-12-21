import React from 'react'

import type { IconProps } from './types'

const IconSupport = ({ color = 'currentColor', height = 24, width = 24, ...props }: IconProps) => {
  return (
    <svg width={width} height={height} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m7.472 20.006 2.953-2.953c.525.131 1.05.263 1.575.263.525 0 1.05-.066 1.575-.263l2.953 2.953c-1.378.788-2.887 1.181-4.528 1.181-1.64 0-3.15-.393-4.528-1.18ZM3.994 7.472l2.953 2.953a4.955 4.955 0 0 0 0 3.084l-2.953 2.953C3.206 15.15 2.812 13.64 2.812 12c0-1.64.394-3.15 1.182-4.528Zm12.534-3.478-2.953 2.953A6.472 6.472 0 0 0 12 6.75c-.525 0-1.05.066-1.575.263l-2.953-3.02c1.378-.787 2.887-1.18 4.528-1.18 1.64 0 3.15.393 4.528 1.18Zm-3.019 11.68c-.525.132-.984.263-1.509.263-.525 0-.984-.13-1.51-.262-.459-.197-.918-.46-1.312-.853-1.51-1.51-1.51-4.003 0-5.578.394-.394.853-.657 1.313-.854.459-.196.984-.262 1.509-.262.525 0 .984.131 1.51.262.459.197.918.46 1.312.854 1.51 1.509 1.51 4.003 0 5.578-.394.328-.853.656-1.313.853Zm6.497.854-2.953-2.953c.328-.984.328-2.1 0-3.084l2.953-2.953c.788 1.378 1.181 2.887 1.181 4.528 0 1.64-.393 3.084-1.181 4.462Zm-.59-11.944A10.424 10.424 0 0 0 12 1.5a10.424 10.424 0 0 0-7.416 3.084A10.424 10.424 0 0 0 1.5 12c0 2.822 1.116 5.447 3.084 7.416A10.424 10.424 0 0 0 12 22.5c2.822 0 5.447-1.116 7.416-3.084A10.424 10.424 0 0 0 22.5 12c0-2.822-1.116-5.447-3.084-7.416Z'
        fill={color}
      />
    </svg>
  )
}

export default IconSupport
