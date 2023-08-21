import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EventScheduler from '../EventScheduler.vue'

describe('EventScheduler', () => {
  test('mount component', async () => {
    expect(EventScheduler).toBeTruthy()
    const wrapper = mount(EventScheduler, {
      props: {
        currentCron: '* * * * *'
      }
    })
    expect(wrapper.currentCron()).toContain('* * * * *')
  })
  test('snapshot UI testing', async () => {
    const wrapper = mount(EventScheduler, {
      props: {
        currentCron: '* * * * *'
      }
    })
    expect(wrapper.text()).toMatchSnapshot()
  })
})
