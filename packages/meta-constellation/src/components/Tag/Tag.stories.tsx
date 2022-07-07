import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tag, TagComponent } from '.'

export default {
  argTypes: {
    size: {
      control: { options: ['default', 'large'], type: 'radio' },
      defaultValue: 'default',
      description: 'Size of the tag',
    },
    type: {
      control: { options: ['info', 'infoalt', 'success', 'warning', 'error'], type: 'radio' },
      defaultValue: 'info',
      description: 'Type of the tag',
    },
    value: {
      control: { type: 'text' },
      defaultValue: 'Text',
      description: 'The content of the tag',
    },
  },
  component: Tag,
  title: 'Components/Tag',
} as ComponentMeta<TagComponent>

const Template: ComponentStory<TagComponent> = ({ type, value, size, ...args }) => {
  return <Tag value={value} type={type} large={size === 'large'} />
}

export const Primary = Template.bind({})
