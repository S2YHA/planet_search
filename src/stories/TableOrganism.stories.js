import TableOrganism from '../components/organisms/TableOrganism.vue'

export default {
  title: 'Organisms/TableOrganism',
  component: TableOrganism
}

export const Basic = {
  args: {
    pages: 6,
    headers: ['Name', 'Population', 'Rotation Period', 'Climate', 'Gravity', 'Created', 'Url'],
    data: [
      {
        Name: 'Tatooine',
        Population: '200000',
        'Rotation Period': '23',
        Climate: 'arid',
        Gravity: '1 standard',
        Created: '09/12/2014, 14:50:49',
        Url: 'https://swapi.dev/api/planets/1/'
      },
      {
        Name: 'Alderaan',
        Population: '2000000000',
        'Rotation Period': '24',
        Climate: 'temperate',
        Gravity: '1 standard',
        Created: '10/12/2014, 12:35:48',
        Url: 'https://swapi.dev/api/planets/2/'
      },
      {
        Name: 'Yavin IV',
        Population: '1000',
        'Rotation Period': '24',
        Climate: 'temperate, tropical',
        Gravity: '1 standard',
        Created: '10/12/2014, 12:37:19',
        Url: 'https://swapi.dev/api/planets/3/'
      },
      {
        Name: 'Hoth',
        Population: 'N/A',
        'Rotation Period': '23',
        Climate: 'frozen',
        Gravity: '1.1 standard',
        Created: '10/12/2014, 12:39:13',
        Url: 'https://swapi.dev/api/planets/4/'
      },
      {
        Name: 'Dagobah',
        Population: 'N/A',
        'Rotation Period': '23',
        Climate: 'murky',
        Gravity: 'N/A',
        Created: '10/12/2014, 12:42:22',
        Url: 'https://swapi.dev/api/planets/5/'
      },
      {
        Name: 'Bespin',
        Population: '6000000',
        'Rotation Period': '12',
        Climate: 'temperate',
        Gravity: '1.5 (surface), 1 standard (Cloud City)',
        Created: '10/12/2014, 12:43:55',
        Url: 'https://swapi.dev/api/planets/6/'
      },
      {
        Name: 'Endor',
        Population: '30000000',
        'Rotation Period': '18',
        Climate: 'temperate',
        Gravity: '0.85 standard',
        Created: '10/12/2014, 12:50:29',
        Url: 'https://swapi.dev/api/planets/7/'
      },
      {
        Name: 'Naboo',
        Population: '4500000000',
        'Rotation Period': '26',
        Climate: 'temperate',
        Gravity: '1 standard',
        Created: '10/12/2014, 12:52:31',
        Url: 'https://swapi.dev/api/planets/8/'
      },
      {
        Name: 'Coruscant',
        Population: '1000000000000',
        'Rotation Period': '24',
        Climate: 'temperate',
        Gravity: '1 standard',
        Created: '10/12/2014, 12:54:13',
        Url: 'https://swapi.dev/api/planets/9/'
      },
      {
        Name: 'Kamino',
        Population: '1000000000',
        'Rotation Period': '27',
        Climate: 'temperate',
        Gravity: '1 standard',
        Created: '10/12/2014, 13:45:06',
        Url: 'https://swapi.dev/api/planets/10/'
      }
    ]
  }
}
