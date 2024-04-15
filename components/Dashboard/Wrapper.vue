<script setup lang="ts">
defineProps<{
  title: string | undefined;
  message?: string;
  description?: string;
}>();
</script>

<template>
  <div class="relative">
    <NavigationTopbar :title="title" />
    <div
      class="p-4 relative h-[calc(100vh-var(--sidebar-height))] mt-[var(--sidebar-height)]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
