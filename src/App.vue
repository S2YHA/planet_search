<template>
  <DataTable
    v-if="!isLoading && planetsData.length"
    class="justify-center"
    :headers="headers"
    :data="planetsData"
    :pages="pages"
    @update="getPlanets"
  >
    <template #cell(Url)="{ value, item }">
      <a :href="value" target="_blank">link</a>
    </template>
  </DataTable>
  <div v-else>LOADING</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from './components/organisms/TableOrganism.vue'

const pages = ref(1)
const planetsData = ref([])
const isLoading = ref(false)
const headers = ['Name', 'Population', 'Rotation Period', 'Climate', 'Gravity', 'Created', 'Url']

function getPlanets({ searchText = '', currentPage = 1 } = {}) {
  const query = buildQuery(searchText.value, currentPage.value)
  isLoading.value = true
  fetch('https://swapi.dev/api/planets' + query)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }
      response.json().then((data) => {
        pages.value = countPages(data)
        planetsData.value = prepareData(data.results)
      })
    })
    .catch((err) => {
      console.log('Fetch Error', err)
    })
    .finally(() => {
      isLoading.value = false
    })
}

function buildQuery(searchText, currentPage) {
  const search = searchText ? searchText : ''
  const page = currentPage ? currentPage : 1

  return `?search=${search}&page=${page}`
}

onMounted(() => {
  getPlanets()
})

function countPages(data) {
  const rowsPerPage = 10
  return Math.ceil(data.count / rowsPerPage)
}

function prepareData(data) {
  const mappedData = data.map((planet) => {
    return {
      Name: planet.name,
      Population: planet.population,
      'Rotation Period': planet.rotation_period,
      Climate: planet.climate,
      Gravity: planet.gravity,
      Created: prepareDate(planet.created),
      Url: planet.url
    }
  })
  return replaceUnknown(mappedData)
}

function replaceUnknown(data) {
  return data.map((planet) => {
    Object.keys(planet).forEach((key) => {
      if (planet[key] === 'unknown') {
        planet[key] = 'N/A'
      }
    })
    return planet
  })
}

function prepareDate(date) {
  return new Date(date).toLocaleString('en-GB')
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
