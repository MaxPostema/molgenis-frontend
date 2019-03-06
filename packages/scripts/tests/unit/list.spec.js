import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ListScripts from '../../src/views/ListScripts'
import * as schemas from './test-schemas'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('views/ListScript.vue', () => {
  let getters
  let store
  let wrapper

  beforeEach(() => {
    getters = {
      scripts: jest.fn().mockReturnValue(schemas.Script),
      loaded: jest.fn().mockReturnValue(true)
    }
    store = new Vuex.Store({
      getters
    })
    store.dispatch = jest.fn()
    wrapper = mount(ListScripts, {
      store,
      localVue,
      stubs: ['font-awesome-icon']
    })
  })

  it('simpleParameters simplifies api item parameter list', () => {
    const parameters = schemas.Script.items[3].parameters
    expect(wrapper.vm.simpleParameters(parameters)).toEqual(['x', 'y', 'age', 'name'])
  })

  it('will show a confirmation modal on remove button click', () => {
    expect(wrapper.vm.$data.confirmedToRemove).toBe('')
    expect(wrapper.vm.$data.showRemoveModal).toBeFalsy()
    wrapper.findAll('.removeButton').at(0).trigger('click')
    expect(wrapper.vm.$data.confirmedToRemove).toBe('Hello World')
    expect(wrapper.vm.$data.showRemoveModal).toBeTruthy()
  })

  it('will remove selected component on confirmation', () => {
    wrapper.findAll('.removeButton').at(0).trigger('click')
    expect(wrapper.vm.$data.confirmedToRemove).toBe('Hello World')
    expect(wrapper.vm.$data.showRemoveModal).toBeTruthy()
    wrapper.vm.confirmedRemove()
    expect(store.dispatch).toBeCalledWith('removeScript', 'Hello World')
    expect(wrapper.vm.$data.confirmedToRemove).toBe('')
  })
})
