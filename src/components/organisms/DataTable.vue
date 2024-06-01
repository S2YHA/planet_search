<template>
  <div class="bg-grey bg-opacity-20">
    <Input />
    <table>
      <thead>
        <tr>
          <th v-for="header in headers">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-t border-slate-500"
          v-for="row in data"
          :key="JSON.parse(JSON.stringify(row))"
        >
          <td v-for="(value, _key) in row">{{ value }}</td>
        </tr>
      </tbody>
    </table>
    <Pagination :currentPage="1" :totalPages="pages" />
  </div>
</template>

<script setup>
import Input from '../atoms/Input.vue'
import Pagination from '../molecules/Pagination.vue'

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
</script>
