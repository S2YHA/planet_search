<template>
  <div class="w-full bg-grey bg-opacity-20">
    <div class="w-full flex justify-center pb-3 px-3">
      <Input class="w-full max-w-96" v-model="searchText" />
    </div>
    <div class="mx-3">
      <table class="w-full">
        <thead class="hidden sm:table-header-group">
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
            <td
              class="py-3 px-6 text-center flex justify-between before:font-bold before:content-[attr(data-label)] before:text-left sm:before:text-center sm:table-cell sm:before:content-none"
              :data-label="key"
              v-for="(value, key) in row"
            >
              <slot :name="`cell(${key})`" :value="value" :item="row">
                {{ value }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pt-3 flex justify-center">
      <Pagination :currentPage="currentPage" :totalPages="pages" @changePage="changePage" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import Input from '@/components/atoms/InputAtom.vue'
import Pagination from '@/components/molecules/PaginationMolecule.vue'

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
