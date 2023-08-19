<template>
  <div>
    <h1 class="header">Cron Input</h1>
    <p class="mt-4">{{foo}}</p>
  </div>
</template>

<script setup lang="ts">
import {CronInputProps} from "../interfaces/components/CronInputProps"

defineProps<CronInputProps>();

</script>

<style scoped lang="postcss">
.header {
  @apply font-bold text-blue-600
}
</style>
