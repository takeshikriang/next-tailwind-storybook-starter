import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'components/ui'

export default {
  title: 'UI/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>My Button</Button>

export const Component = Template.bind({})
Component.storyName = 'Button'
