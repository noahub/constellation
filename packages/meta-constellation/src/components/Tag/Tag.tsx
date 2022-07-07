import classnames from 'classnames'
import React from 'react'

import { TagComponent } from './Tag.types'

const Tag: TagComponent = ({ type = 'info', value, ...props }) => {
  return (
    <span
      className={classnames('px-2 py-[3px] rounded', {
        'bg-background-green text-success theme-dark:bg-success theme-dark:text-dark-900':
          type === 'success',
        'bg-background-light text-title': type === 'info',
        'bg-background-orange text-warning theme-dark:bg-warning theme-dark:text-dark-900':
          type === 'warning',
        'bg-background-red text-error theme-dark:bg-error theme-dark:text-dark-900':
          type === 'error',
        'bg-transparent text-body': type === 'infoalt',
      })}
    >
      {value}
    </span>
  )
}

export default Tag
