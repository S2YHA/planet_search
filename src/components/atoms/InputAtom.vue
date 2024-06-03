<template>
  <input
    v-model="model"
    class="bg-transparent outline-none border border-amber-400 rounded-md p-2"
    placeholder="Search..."
  />
</template>

<script setup>
const model = defineModel()
</script>
