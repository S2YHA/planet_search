<template>
  <div class="bg-grey bg-opacity-20">
    <div class="w-full flex justify-center pb-3">
      <Input class="w-full max-w-96" v-model="searchText" />
    </div>
    <table class="w-95">
      <thead>
        <tr>
          <th class="py-3 px-6 font-extrabold" v-for="header in headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-t border-zinc-600"
          v-for="row in data"
          :key="JSON.parse(JSON.stringify(row))"
        >
          <td class="py-3 px-6 text-center" v-for="(value, key) in row">
            <slot :name="`cell(${key})`" :value="value" :item="row">
              {{ value }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pt-3 flex justify-center">
      <Pagination :currentPage="currentPage" :totalPages="pages" @changePage="changePage" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Input from '../atoms/Input.vue'
import Pagination from '../molecules/Pagination.vue'

const emit = defineEmits(['update'])

defineProps({
  headers: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  pages: {
    type: Number,
    required: false,
    default: 1
  }
})

const currentPage = ref(1)
function changePage(newPage) {
  currentPage.value = newPage
}

const searchText = ref('')

watch(searchText, () => {
  currentPage.value = 1

  emit('update', {
    searchText: searchText,
    currentPage: currentPage
  })
})
watch(currentPage, () => {
  emit('update', {
    searchText: searchText,
    currentPage: currentPage
  })
})
</script>
