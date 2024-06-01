<template>
  <div class="flex gap-4">
    <Button @click="previousPage" label="Previous" :disabled="currentPage === 1" />
    <Button v-for="pageNumber in totalPages" :label="pageNumber" />
    <Button @click="nextPage" label="Next" :disabled="currentPage === totalPages" />
  </div>
</template>

<script setup>
import Button from '../atoms/Button.vue'

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

function previousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>
