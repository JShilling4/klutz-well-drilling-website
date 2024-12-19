<script setup lang="ts">
const { width = "1600px" } = defineProps<{
  width?: string;
}>();
</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: v-bind(width);
  margin: 0 auto;
}
</style>
