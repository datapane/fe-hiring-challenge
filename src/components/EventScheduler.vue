<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import {
  type FrequencyType,
  frequencyOptions
} from '../interfaces/FrequencyType'
import cron from 'cron-validate'
import cronstrue from 'cronstrue'
import {
  getEndDateFromCron,
  getCronFromEndDate,
  getFrequencyFromCron,
  getCronFromFrequency,
  getRepetitionsFromCron,
  getCronFromRepetitions
} from '../utils/cronUtils'

const emit = defineEmits({
  submit: (value: string) => cron(value).isValid(),
  cancel: null
})

const props = defineProps({
  currentCron: {
    type: String,
    required: false,
    default: '* * * * *',
    validator(value: string) {
      return cron(value).isValid()
    }
  }
})

const startDate = ref(new Date().toLocaleString())
const endDate: Ref<string | undefined> = ref()
const frequency: Ref<FrequencyType> = ref(frequencyOptions[0])
const repetitions = ref()
const newCron = ref(props.currentCron)

const newCronReadable = computed(() => cronstrue.toString(newCron.value))

watch(
  () => props.currentCron,
  async (value) => {
    endDate.value = getEndDateFromCron(value)
    frequency.value = getFrequencyFromCron(value)
    repetitions.value = getRepetitionsFromCron(value)
  },
  { immediate: true }
)
watch(endDate, async (value) => {
  newCron.value = getCronFromEndDate(value || '', props.currentCron)
})
watch(frequency, async (value) => {
  newCron.value = getCronFromFrequency(value, props.currentCron)
})
watch(repetitions, async (value) => {
  newCron.value = getCronFromRepetitions(value, props.currentCron)
})
</script>

<template>
  <div class="q-pa-md" style="max-width: 600px">
    <q-form class="q-gutter-md" @submit.prevent="emit('submit', newCron)">
      <div class="text-h5">When</div>
      <q-input v-model="startDate">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy>
              <div class="q-gutter-md row items-start">
                <q-date v-model="startDate" mask="DD-MM-YYYY, HH:mm:ss" />
                <q-time
                  v-model="startDate"
                  mask="DD-MM-YYYY, HH:mm:ss"
                  with-seconds />
              </div>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-input v-model="endDate">
        <template #append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy>
              <div class="q-gutter-md row items-start">
                <q-date v-model="endDate" />
                <q-time v-model="endDate" />
              </div>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div class="text-h5">How Often</div>
      <q-select
        v-model="frequency"
        :options="frequencyOptions"
        label="Standard"
        option-value="id"
        option-label="text"
        emit-value
        map-options />
      <q-input v-model.number="repetitions" type="number" />
      <q-separator dark />
      <div class="text-h7">Selected schedule: {{ newCronReadable }}</div>
      <q-separator dark />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Cancel"
          color="primary"
          flat
          class="q-ml-sm"
          @click="emit('cancel')" />
      </div>
    </q-form>
  </div>
</template>

<style scoped></style>
