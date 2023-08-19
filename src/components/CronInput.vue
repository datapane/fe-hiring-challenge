<template>
  <div class="container">
    <label class="label">
      Cron time
      <input name="cron time" v-model="cron" class="input" :class="{invalid: !isValid}" placeholder="* * * * *">
    </label>
    <label class="label">
      Script
      <input name="script path" v-model="job" class="input" placeholder="./path/to/script.bat" />
    </label>
    <button class="button" :class="{active:cron && isValid && job}">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CronInputProps } from "../interfaces/components/CronInputProps";
import { isValidCron } from "../utils/isValidCron";

const props = defineProps<CronInputProps>();

const cron = ref(props.defaultCron ?? '');
const isValid = ref(true);
const job = ref(props.defaultScript ?? '');
watch(cron, () => {
  isValid.value = cron.value === '' || isValidCron(cron.value);
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
  @apply mx-1 text-white bg-gray-200 border border-gray-300 px-4 py-1 rounded pointer-events-none
}

.button.active {
  @apply bg-green-500 border-green-500 pointer-events-auto
}
</style>
