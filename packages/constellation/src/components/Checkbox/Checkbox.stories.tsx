import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from 'components'
import React from 'react'

export default {
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      description: 'Separate the content vertically or horizontally.',
      options: ['horizontal', 'vertical'],
    },
  },
  component: Checkbox,
  title: 'Components/Checkbox',
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {}
