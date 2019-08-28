import { shallowMount, createLocalVue } from '@vue/test-utils'
import CardView from '@/views/CardView.vue'
import Vuex from 'vuex'

describe('CardView.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  let store: any
  let state: any
  let mutations: any
  let getters: any

  beforeEach(() => {
    state = {
      shoppingFilter: false,
      entityMeta: { idAttribute: 'id' },
      dataDisplayLayout: 'ClipboardView',
      shoppedEntityItems: [1, 3]
    }
    mutations = {
      toggleShoppingItems: jest.fn()
    }
    getters = {
      activeEntityData: jest.fn().mockReturnValue({
        items: [
          { id: '1' },
          { id: '2' },
          { id: '3' }
        ] })
    }
    store = new Vuex.Store({
      state, mutations, getters
    })
  })

  it('exists', () => {
    const wrapper = shallowMount(CardView, { store,
      localVue,
      propsData: { entitiesToShow: [] } })
    expect(wrapper.exists()).toBeTruthy()
  })
})
