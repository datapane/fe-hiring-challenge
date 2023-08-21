import { Meta, Story } from '@storybook/vue3'
import EventList from '../components/EventList.vue'

export default {
  component: EventList
} as Meta

export const Primary: Story = (args) => ({
  components: { EventList },
  setup() {
    return { args }
  },
  template: `<EventList v-bind="args" />`
})
