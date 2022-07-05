import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Input, InputComponent } from '.'

export default {
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      defaultValue: 'Placeholder',
    },
    prefix: {
      control: { type: 'text' },
      description: 'Prefix text',
      defaultValue: 'Prefix',
    },
    state: {
      control: { type: 'radio', options: ['default', 'success', 'error'] },
      description: 'Error state of the input',
      defaultValue: 'default',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the input',
      defaultValue: false,
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
      defaultValue: 'Label',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text',
      defaultValue: 'Helper text',
    },
  },
  component: Input,
  title: 'Components/Input',
} as ComponentMeta<InputComponent>

const PrimaryComponent: ComponentStory<InputComponent> = ({
  placeholder,
  prefix,
  state,
  disabled,
  label,
  helperText,
}) => {
  return (
    <Input
      placeholder={placeholder}
      prefix={prefix}
      state={state}
      disabled={disabled}
      label={label}
      helperText={helperText}
    />
  )
}

const PasswordComponent: ComponentStory<InputComponent> = ({
  placeholder,
  state,
  disabled,
  label,
  helperText,
}) => {
  return (
    <Input
      placeholder={placeholder}
      state={state}
      disabled={disabled}
      label={label}
      helperText={helperText}
      password
    />
  )
}

export const Primary = PrimaryComponent.bind({})
export const Password = PasswordComponent.bind({})
