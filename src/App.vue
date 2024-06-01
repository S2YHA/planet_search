<template>
  <DataTable
    v-if="planetsData.length"
    class="justify-center"
    :headers="headers"
    :data="planetsData"
    :pages="pages"
    @changePage="getPlanets"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from './components/organisms/DataTable.vue'

const planetsData = ref([])
const pages = ref(1)
const headers = ['Name', 'Population', 'Rotation Period', 'Climate', 'Gravity', 'Created', 'Url']

function getPlanets(page = 1) {
  fetch('https://swapi.dev/api/planets/?page=' + page)
    .then(function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }
      response.json().then(function (data) {
        pages.value = countPages(data)
        planetsData.value = prepareData(data.results)
      })
    })
    .catch(function (err) {
      console.log('Fetch Error', err)
    })
}

onMounted(() => {
  getPlanets()
})

function countPages(data) {
  return Math.ceil(data.count / data.results.length)
}

function prepareData(data) {
  return data.map((planet) => {
    return {
      Name: planet.name,
      Population: planet.population,
      'Rotation Period': planet.rotation_period,
      Climate: planet.climate,
      Gravity: planet.gravity,
      Created: planet.created,
      Url: planet.url
    }
  })
}
</script>

<style>
body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('./assets/death_star_star_wars_2-wallpaper-2560x1600.jpg');
}
</style>
