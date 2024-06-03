<template>
  <div class="flex gap-4">
    <Button label="Prev" :disabled="currentPage === 1" @click="changePage(currentPage - 1)" />
    <Button
      v-for="pageNumber in totalPages"
      :class="[currentPage == pageNumber ? 'opacity-50' : '', 'hidden sm:block']"
      :label="pageNumber.toString()"
      @click="changePage(pageNumber)"
    />
    <Button
      label="Next"
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    />
  </div>
</template>

<script setup>
import { useScroll } from '@/composables/useScroll'
import Button from '@/components/atoms/ButtonAtom.vue'

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

const emit = defineEmits(['changePage'])
const { scrollToTop } = useScroll()

function changePage(newPage) {
  emit('changePage', newPage)
  scrollToTop()
}
</script>
