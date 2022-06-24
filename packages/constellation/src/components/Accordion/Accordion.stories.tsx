import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Accordion } from 'components'
import React from 'react'

export default {
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      description: 'Separate the content vertically or horizontally.',
      options: ['horizontal', 'vertical'],
    },
  },
  component: Accordion,
  title: 'Components/Accordion',
} as ComponentMeta<any>

const Template: ComponentStory<any> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args = {}
