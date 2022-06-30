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
    },
    state: {
      control: { type: 'radio', options: ['default', 'success', 'error'] },
      description: 'State of the input',
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
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text',
    },
  },
  component: Input,
  title: 'Components/Input',
} as ComponentMeta<InputComponent>

const Template: ComponentStory<InputComponent> = ({
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

export const Primary = Template.bind({})
