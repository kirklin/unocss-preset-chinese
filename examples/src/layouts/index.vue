<script setup lang="ts">

defineOptions({
  name: "Layout",
});
</script>

<template>
  <div class="antialiased">
    <div class="min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
