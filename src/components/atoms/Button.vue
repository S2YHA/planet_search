<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script setup>
const emit = defineEmits(['click'])

defineProps({
  label: {
    type: String,
    required: true,
    default: 'Text'
  }
})

function handleClick() {
  emit('click')
}
</script>
