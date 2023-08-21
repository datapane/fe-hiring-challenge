<script setup lang="ts">
import EventListItem from './EventListItem.vue'
import EventScheduler from './EventScheduler.vue'
import EventType from '../interfaces/EventType'
import { useEvents } from '../stores/events'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import cronstrue from 'cronstrue'

const eventsStore = useEvents()
const { events, isRequestLoading } = storeToRefs(eventsStore)

const currentEvent: Ref<EventType> = ref({
  cron: '* * * * *',
  action: '',
  description: ''
})

const isEditing = ref(false)

function onEditEvent(event: EventType) {
  currentEvent.value = event
  isEditing.value = true
}

function onCreateEvent() {
  currentEvent.value = {
    cron: '* * * * *',
    action: '',
    description: ''
  }
  isEditing.value = true
}

function onSaveCurrentEvent(newCron: string) {
  currentEvent.value.cron = newCron
  currentEvent.value.description = cronstrue.toString(newCron)
  currentEvent.value.action = '/random/action/x.sh'
  if (currentEvent.value.id) {
    eventsStore.updateEvent(currentEvent.value)
  } else {
    eventsStore.saveEvent(currentEvent.value)
  }
  isEditing.value = false
}

onMounted(() => {
  eventsStore.fetchEvents()
})
</script>

<template>
  <template v-if="!isEditing">
    <section v-if="isRequestLoading">
      <q-spinner color="primary" size="3em" :thickness="2" />
    </section>
    <section v-else>
      <q-list>
        <q-item-label header>Event List</q-item-label>
        <EventListItem
          v-for="(event, i) in events"
          :key="`${event.id}-${i}`"
          :event="event"
          @open="onEditEvent"
          @delete="(id: number) => eventsStore.deleteEvent(id)" />
      </q-list>
      <q-btn color="primary" label="Create" @click="onCreateEvent" />
    </section>
  </template>
  <EventScheduler
    v-else
    :current-cron="currentEvent.cron"
    @submit="onSaveCurrentEvent"
    @cancel="isEditing = false" />
</template>

<style scoped></style>
