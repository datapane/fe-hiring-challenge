<template>
  <div class="container">
    <input v-model="cron" ref="inputRef" class="cron-input" :class="{invalid: !isValid}" placeholder="* * * * *">
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { CronInputProps } from "../interfaces/components/CronInputProps";
import { isValidCron } from "../utils/isValidCron";

defineProps<CronInputProps>();

const cron = ref<string>('');
const isValid = ref(true);

watch(cron, () => {
  isValid.value = cron.value === '' || isValidCron(cron.value);
});

</script>

<style scoped lang="postcss">
.container {
  @apply flex flex-col
}

.cron-input {
  @apply border rounded px-2 py-1 focus:outline-none focus:border-blue-500
}

.cron-input.invalid {
  @apply border-red-600 focus:border-red-600
}
</style>
