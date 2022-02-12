import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Form } from 'components'

export default {
  title: 'Components/Form',
  component: Form
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = () => <Form />

export const Component = Template.bind({})
Component.storyName = 'Form'
