<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
import { ref } from 'vue'

const label = ref('Click me')

function handleClick() {
  console.log('Button clicked')
}
</script>
