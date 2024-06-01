<template>
  <div class="flex gap-4">
    <Button label="Previous" :disabled="currentPage === 1" @click="changePage(currentPage - 1)" />
    <Button v-for="pageNumber in totalPages" :label="pageNumber" @click="changePage(pageNumber)" />
    <Button
      label="Next"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    />
  </div>
</template>

<script setup>
import Button from '../atoms/Button.vue'

const emit = defineEmits(['changePage'])

defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

function changePage(newPage) {
  emit('changePage', newPage)
}
</script>
