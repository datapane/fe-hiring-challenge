<template>
  <form class="container" @submit.prevent="onSubmit">
    <label class="label">
      Cron Time
      <input name="cron time" v-model="cron" class="input" :class="{invalid: !isValid}" placeholder="* * * * *">
    </label>
    <label class="label">
      Script/Job
      <input name="script path" v-model="job" class="input" placeholder="./path/to/script.bat" />
    </label>
    <button class="button" :class="{submitting: isSubmitting}" type="submit" :disabled="!cron || !isValid || !job">
      Submit
      <span v-if="isSubmitting" class="spinner" />
    </button>
  </form>

  <small v-if="showNext" class="cron-next">Next run: {{ nextCron ?? 'undefined' }}</small>

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

const isSubmitting = ref(false);

const onSubmit = () => {
  isSubmitting.value = true;
  console.log(`Submitting '${cron.value} ${job.value}' to ${props.to}`);
  // Dupe actual submission to API
  setTimeout(() => isSubmitting.value = false, 1000);
}

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
  @apply border-red-600 focus:border-red-600 animate-shudder
}

.button {
  @apply relative mx-1 text-white bg-gray-400 border border-gray-400 px-4 py-1 rounded flex justify-center items-center
}

.button:not(:disabled) {
  @apply bg-green-500 border-green-500
}

.button.submitting {
  @apply pointer-events-none
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

.spinner {
  @apply h-[16px] w-[16px] block border border-gray-300 border-t-white rounded-full animate-spin ml-2
}
</style>
