import { vi, describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import PaginationMolecule from '@/components/molecules/PaginationMolecule.vue'
import Button from '@/components/atoms/ButtonAtom.vue'

describe('PaginationMolecule.vue', () => {
  const createWrapper = (currentPage, totalPages) => {
    return shallowMount(PaginationMolecule, {
      props: { currentPage, totalPages },
      global: {
        components: { Button }
      }
    })
  }

  it('disables the Prev button on the first page', () => {
    const wrapper = createWrapper(1, 5)
    const prevButton = wrapper.find('#prev-button')
    expect(prevButton.attributes('disabled')).toBe('true')
  })

  it('disables the Next button on the last page', () => {
    const wrapper = createWrapper(5, 5)
    const nextButton = wrapper.find('#next-button')
    expect(nextButton.attributes('disabled')).toBe('true')
  })

  it('emits changePage with the correct page number when a page button is clicked', async () => {
    const wrapper = createWrapper(1, 5)
    const pageButton = wrapper.find('#page-3')
    await pageButton.trigger('click')
    expect(wrapper.emitted('changePage')).toBeTruthy()
    expect(wrapper.emitted('changePage')[0]).toEqual([3])
  })

  it('highlights the current page button', () => {
    const wrapper = createWrapper(3, 5)
    const currentPageButton = wrapper.find('#page-3')
    expect(currentPageButton.classes()).toContain('opacity-50')
  })
})
