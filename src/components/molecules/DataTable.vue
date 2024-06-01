<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in data" :key="JSON.parse(JSON.stringify(row))">
        <td v-for="(value, _key) in row">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  headers: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>
