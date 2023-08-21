import { defineStore } from 'pinia'
import EventType from '../interfaces/EventType'
import { events } from '../resources/events.json'

type State = {
  events: EventType[]
  isRequestLoading: Boolean
  requestError?: Error
}

export const useEvents = defineStore('events', {
  state: (): State => ({
    events: [],
    isRequestLoading: false
  }),
  getters: {
    getEventById({ events }): (id: Number) => EventType | undefined {
      return (id: Number): EventType | undefined => {
        return events.find((event) => event.id === id)
      }
    }
  },
  actions: {
    async fetchEvents() {
      try {
        this.isRequestLoading = true
        await fetch('') // Call REST Api
        this.events = events
      } catch (error) {
        this.requestError = error
        console.error(error)
      } finally {
        this.isRequestLoading = false
      }
    },
    async saveEvent(event: EventType) {
      try {
        await fetch('') // Call REST Api
        this.events = [
          ...this.events,
          {
            id: this.events[this.events.length - 1].id + 1,
            ...event
          }
        ]
      } catch (error) {
        console.error(error)
      }
    },
    async updateEvent(newEvent: EventType) {
      try {
        await fetch('') // Call REST Api
        this.events = this.events.map((event: EventType) =>
          newEvent.id == event.id ? newEvent : event
        )
      } catch (error) {
        console.error(error)
      }
    },
    async deleteEvent(id: Number) {
      try {
        await fetch('') // Call REST Api
        this.events = this.events.filter((event: EventType) => id != event.id)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
