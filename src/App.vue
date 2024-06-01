<template>
  <DataTable :headers="headers" :data="planetsData" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from './components/molecules/DataTable.vue'

const planetsData = ref([])
const headers = ['Name', 'Population', 'Rotation Period', 'Climate', 'Gravity', 'Created', 'Url']

onMounted(() => {
  fetch('https://swapi.dev/api/planets')
    .then(function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }
      response.json().then(function (data) {
        planetsData.value = data.results.map((planet) => {
          return {
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            climate: planet.climate,
            gravity: planet.gravity,
            created: planet.created,
            url: planet.url
          }
        })
      })
    })
    .catch(function (err) {
      console.log('Fetch Error', err)
    })
})
</script>

<style scoped></style>
