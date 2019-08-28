import { shallowMount } from '@vue/test-utils'
import EntityTableRow from '@/components/dataView/TableRow.vue'

describe('EntityTableRow.vue', () => {
  it('exists', () => {
    const wrapper = shallowMount(EntityTableRow, { propsData: { id: 'id', rowData: {} } })
    expect(wrapper.exists()).toBeTruthy()
  })
  it('renders table rows', () => {
    const wrapper = shallowMount(EntityTableRow, { propsData: { id: 'id', rowData: { name: 'name', title: 'title', content: 'content' } } })
    expect(wrapper.findAll('td').length).toEqual(3)
  })
})
