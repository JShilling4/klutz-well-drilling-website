<script setup lang="ts">
const { maxW = "1300px" } = defineProps<{
  maxW?: string;
}>();
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: v-bind(maxW);
  margin-left: auto;
  margin-right: auto;
}
</style>
