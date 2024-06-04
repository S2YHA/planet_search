import PaginationMolecule from '../components/molecules/PaginationMolecule.vue'

export default {
  title: 'Molecules/PaginationMolecule',
  component: PaginationMolecule
}

export const Basic = {
  args: {
    currentPage: 1,
    totalPages: 6
  }
}
