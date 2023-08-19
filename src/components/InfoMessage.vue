<template>
  <div class="info-message" :class="{error: isError}">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { InfoMessageProps } from "../interfaces/components/InfoMessageProps"

defineProps<InfoMessageProps>();
</script>

<style scoped lang="postcss">
.info-message {
  @apply border-l-2 border-amber-600 text-amber-600 bg-amber-100 rounded-r inline-block pl-2 pr-4 py-2 mt-2 text-xl antialiased
}

.info-message.error {
  @apply border-red-600 text-red-600 bg-red-100
}
</style>
