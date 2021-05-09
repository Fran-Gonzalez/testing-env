import { createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

export let options = {
    localVue: createLocalVue().use(Vuex),
    vuetify: new Vuetify()
}