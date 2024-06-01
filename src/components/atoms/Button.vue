<template>
  <button class="p-1.5 rounded-md bg-amber-400 text-black" @click="handleClick">{{ label }}</button>
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
