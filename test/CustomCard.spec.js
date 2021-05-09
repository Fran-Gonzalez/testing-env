import { mount } from '@vue/test-utils'
import {options} from './testing_env/testing_env'
import Vuex from 'vuex'

import CustomCard from '@/components/CustomCard'

let wrapper
let store = new Vuex.Store({
    state: { products: [] }
})

const propsData = {
    title: 'custom value'
}

beforeEach(() => {
    wrapper = mount(CustomCard, {...options, store, propsData})
})

afterEach(() => {
    wrapper.destroy()
})

describe('CustomCard', () => {
    test('prop is passed correctly', () => {        
        const title = wrapper.find('.v-card__title > span')
        expect(title.text()).toEqual('custom value')
    })
})