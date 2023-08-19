<template>
  <div class="flex items-center justify-center h-full">
    <CronInput to="example.api/endpoint" show-text show-next class="m-2" />
  </div>
</template>

<script setup lang="ts">
import CronInput from "./components/CronInput.vue";
</script>
