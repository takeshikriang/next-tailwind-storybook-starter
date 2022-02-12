import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconExclamation } from 'components/icons'

export default {
  title: 'Icons/IconExclamation',
  component: IconExclamation,
  argTypes: {
    className: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof IconExclamation>

const Template: ComponentStory<typeof IconExclamation> = (args) => <IconExclamation {...args} />

export const Component = Template.bind({})
Component.storyName = 'IconExclamation'
