import { shallowMount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import TableOrganism from '@/components/organisms/TableOrganism.vue'
import Input from '@/components/atoms/InputAtom.vue'
import Pagination from '@/components/molecules/PaginationMolecule.vue'

describe('TableOrganism.vue', () => {
  const headers = ['Header1', 'Header2']
  const data = [
    { Header1: 'Row1 Col1', Header2: 'Row1 Col2' },
    { Header1: 'Row2 Col1', Header2: 'Row2 Col2' }
  ]
  const pages = 2

  const createWrapper = () => {
    return shallowMount(TableOrganism, {
      props: { headers, data, pages },
      global: {
        components: { Input, Pagination }
      }
    })
  }

  it('renders headers correctly', () => {
    const wrapper = createWrapper()
    const headerElements = wrapper.findAll('th')
    expect(headerElements.length).toBe(headers.length)
    headers.forEach((header, index) => {
      expect(headerElements[index].text()).toBe(header)
    })
  })

    it('renders data rows correctly', () => {
      const wrapper = createWrapper();
      const rowElements = wrapper.findAll('tbody tr');
      expect(rowElements.length).toBe(data.length);
      data.forEach((row, rowIndex) => {
        const cellElements = rowElements[rowIndex].findAll('td');
        Object.values(row).forEach((cellValue, cellIndex) => {
          expect(cellElements[cellIndex].text()).toContain(cellValue);
        });
      });
    });

    it('emits update event when search text is updated', async () => {
      const wrapper = createWrapper();
      const input = wrapper.findComponent(Input);
      await input.setValue('new search');
      expect(wrapper.emitted('update')).toBeTruthy();
      expect(wrapper.emitted('update')[0][0]).toEqual({ searchText: 'new search', currentPage: 1 });
    });

    it('emits update event when page is changed', async () => {
      const wrapper = createWrapper();
      const pagination = wrapper.findComponent(Pagination);
      pagination.vm.$emit('changePage', 2);
      expect(wrapper.emitted('update')).toBeTruthy();
      expect(wrapper.emitted('update')[0][0]).toEqual({ searchText: '', currentPage: 2 });
    });
})
