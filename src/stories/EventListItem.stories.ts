import { Meta, Story } from '@storybook/vue3'
import EventListItem from '../components/EventListItem.vue'

export default {
  component: EventListItem
} as Meta

export const Primary: Story = (args) => ({
  components: { EventListItem },
  setup() {
    return { args }
  },
  template: `<EventListItem v-bind="args" />`
})
Primary.args = {
  event: {
    id: Math.random(),
    cron: '10-59/10 5 * * *',
    action: '/root/clearcache.sh',
    description:
      'Clear the cache every 10 minutes at 5 am, starting from 5:10 am.'
  }
}
