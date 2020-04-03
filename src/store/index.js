import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import authStore from './auth'
import userStore from './users'
import productStore from './products'
import vendorStore from './vendors'

export default new Vuex.Store({
    modules: {
        authStore,
        userStore,
        productStore,
        vendorStore
    }
})