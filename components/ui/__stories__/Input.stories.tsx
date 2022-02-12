import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from 'components/ui'

const errorsMock = {
  noErrors: null,
  hasErrors: { foo: 'bar' }
}

export default {
  title: 'UI/Input',
  component: Input,
  decorators: [(Story) => <div className="max-w-xs">{Story()}</div>],
  argTypes: {
    register: {
      table: {
        disable: true
      }
    },
    errors: {
      options: Object.keys(errorsMock),
      mapping: errorsMock,
      control: { type: 'radio' },
      labels: {
        noErrors: 'No errors',
        hasErrors: 'Has errors'
      }
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Component = Template.bind({})
Component.storyName = 'Input'
