import React from 'react'
import classnames from 'classnames'

import { InputComponent } from './Input.types'

const Input: InputComponent = ({
  placeholder,
  prefix,
  state,
  disabled,
  label = '',
  helperText = '',
}) => {
  return (
    <div>
      <label className='text-sm text-title'>{label}</label>
      <div
        className={classnames(
          'h-12 pl-4 bg-background rounded-lg flex border border-medium items-center focus-within:border-primary',
          {
            'border-success': state === 'success',
            'border-error': state === 'error',
            'bg-background-light': disabled,
          },
        )}
      >
        {prefix?.length ? <span className='text-muted mr-4'>{prefix}</span> : null}
        <input
          className={classnames(
            'text-title placeholder:text-muted h-full flex-grow bg-transparent outline-none',
            { 'text-body': disabled },
          )}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      <span
        className={classnames('text-xs text-body mt-1', {
          'text-success': state === 'success',
          'text-error': state === 'error',
        })}
      >
        {helperText}
      </span>
    </div>
  )
}

export default Input
