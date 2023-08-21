<script setup lang="ts">
import EventType from '../interfaces/EventType'

defineProps({
  event: {
    type: Object as () => EventType,
    required: true
  }
})

const emit = defineEmits(['open', 'delete'])
</script>

<template>
  <q-item>
    <q-item-section center class="col-2 gt-sm">
      <q-item-label>{{ event.action }}</q-item-label>
    </q-item-section>

    <q-item-section top>
      <q-item-label lines="1">
        {{ event.cron }}
      </q-item-label>
      <q-item-label caption lines="1">
        {{ event.description }}
      </q-item-label>
      <q-item-label
        lines="1"
        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
        <span class="cursor-pointer" @click.stop="emit('open', event)"
          >Open</span
        >
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="delete"
          @click.stop="emit('delete', event.id)" />
      </div>
    </q-item-section>
  </q-item>
  <q-separator spaced />
</template>

<style scoped></style>
