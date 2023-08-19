<template>
  <div class="container">
    <label class="label">
      Cron time
      <input name="cron time" v-model="cron" class="input" :class="{invalid: !isValid}" placeholder="* * * * *">
    </label>
    <label class="label">
      Script/Job
      <input name="script path" v-model="job" class="input" placeholder="./path/to/script.bat" />
    </label>
    <button class="button" :disabled="!cron || !isValid || !job">
      Submit
    </button>
  </div>

  <small v-if="showNext" class="cron-next">Next cron run: {{ nextCron ?? 'undefined' }}</small>

  <div v-show="showText" class="cron-text" :class="{error: !cronText}">
    <template v-if="cronText">
      Cron will run: {{ cronText }}
    </template>
    <template v-else>
      Invalid cron string
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CronInputProps } from "../interfaces/components/CronInputProps";
import { isValidCron } from "../utils/isValidCron";
import { cronToText } from "../utils/cronToText"
import { getNextCron } from "../utils/getNextCron.ts"

const props = defineProps<CronInputProps>();

const cron = ref(props.defaultCron ?? '');
const isValid = ref(true);
const job = ref(props.defaultScript ?? '');

const cronText = ref(props.defaultCron ? cronToText(props.defaultCron) : null);
const nextCron = ref(props.defaultCron ? getNextCron(props.defaultCron) : null);

watch(cron, () => {
  isValid.value = cron.value === '' || isValidCron(cron.value);

  if (isValidCron(cron.value)) {
    cronText.value = cronToText(cron.value);
    nextCron.value = getNextCron(cron.value);
  } else {
    cronText.value = null;
    nextCron.value = null;
  }
});

</script>

<style scoped lang="postcss">
.container {
  @apply -mx-1 flex items-end
}

.label {
  @apply mx-1 flex flex-col
}

.label .input {
  @apply mt-1
}

.input {
  @apply border rounded px-2 py-1 focus:outline-none focus:border-blue-500
}

.input.invalid {
  @apply border-red-600 focus:border-red-600
}

.button {
  @apply mx-1 text-white bg-gray-400 border border-gray-400 px-4 py-1 rounded
}

.button:not(:disabled) {
  @apply bg-green-500 border-green-500
}

.cron-text {
  @apply border-l-2 border-amber-600 text-amber-600 bg-amber-100 rounded-r inline-block pl-2 pr-4 py-2 mt-2 text-xl antialiased
}

.cron-text.error {
  @apply border-red-600 text-red-600 bg-red-100
}

.cron-next {
  @apply text-sm block text-blue-900 antialiased
}

</style>
