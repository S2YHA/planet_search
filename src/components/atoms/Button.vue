<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
    default: 'Click'
  }
})

function handleClick() {
  console.log('Button clicked')
}
</script>
