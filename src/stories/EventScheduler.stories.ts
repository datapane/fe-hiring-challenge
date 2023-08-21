import { Meta, Story } from '@storybook/vue3'
import EventScheduler from '../components/EventScheduler.vue'

export default {
  component: EventScheduler
} as Meta

export const Primary: Story = (args) => ({
  components: { EventScheduler },
  setup() {
    return { args }
  },
  template: `<EventScheduler v-bind="args" />`
})
Primary.args = {
  cron: '* * * 1,2,5 *'
}
