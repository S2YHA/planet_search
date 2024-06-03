import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils';
import InputAtom from '@/components/atoms/InputAtom.vue';

describe('InputAtom.vue', () => {
  it('renders an input element with the correct class and placeholder', () => {
    const wrapper = shallowMount(InputAtom);
    const input = wrapper.find('input');
    
    expect(input.exists()).toBe(true);
    expect(input.attributes('class')).toContain('bg-transparent outline-none border border-amber-400 rounded-md p-2');
    expect(input.attributes('placeholder')).toBe('Search...');
  });

  it('updates the model value when the input value changes', async () => {
    const wrapper = shallowMount(InputAtom, {
      props: { modelValue: '' },
    });
    const input = wrapper.find('input');
    await input.setValue('new value');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['new value']);
  });
});

