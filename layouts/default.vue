<script setup lang="ts"></script>

<template>
  <!-- This should be the dashboard if there's auth -->
  <div class="flex flex-col justify-center items-center gap-5 text-center h-screen px-4">
    <slot />
    <NavigationFooter />
  </div>
</template>

<style scoped></style>
