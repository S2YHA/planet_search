import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ButtonAtom from '@/components/atoms/ButtonAtom.vue'

describe('ButtonAtom.vue', () => {
  it('renders with the correct label', () => {
    const label = 'Click Me'
    const wrapper = shallowMount(ButtonAtom, {
      props: { label }
    })
    expect(wrapper.text()).toBe(label)
  })

  it('emits a click event when clicked', async () => {
    const wrapper = shallowMount(ButtonAtom)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
