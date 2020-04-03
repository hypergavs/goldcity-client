import { HTTP_API } from '@/helpers/http'

const initialState = () => ({
    vendors: [
        {
            id: 1,
            vendor_name: 'Sample vendor 1',
            contact : '+639898656444656',
            about: 'This is just a sample details about the vendor'
        },
        {
            id: 2,
            vendor_name: 'Sample vendor 2',
            contact : '+6659849877777',
            about: 'This is just a sample details about the vendor'
        },
        {
            id: 3,
            vendor_name: 'Sample vendor 3',
            contact : '+656564152454',
            about: 'This is just a sample details about the vendor'
        }
    ],
    vendor: {
        vendor_name: '',
        contact : '',
        about: '',
    }
})

const state = initialState();

const mutations = {
    CLEAR_VENDOR(state){
        state.vendor = {
            vendor_name: '',
            contact: '',
            about: ''
        }
    },

    SET_VENDOR(state, payload){
        state.vendor = payload
    },

    ADD_VENDOR_TO_LIST(state, payload){
        state.vendors.push(payload)
    },

    UPDATE_VENDOR(state, payload) {
        state.vendors[payload.index] = payload.value
    },

    REMOVE_VENDOR(state, index){
        state.vendors.splice(index, 1)
    }
}

const actions = {
    processAddVendor( {commit}, vendor ) {
        // some http post request here
        commit('ADD_VENDOR_TO_LIST', vendor)
        commit('CLEAR_VENDOR')
    },

    processUpdateVendor( {commit}, vendor ) {
        commit('UPDATE_VENDOR', vendor)
    },

    processRemoveVendor( {commit}, index ) {
        commit('REMOVE_VENDOR', index)
    }
}

const getters = {
    vendors: state => state.vendors,

    vendor: state => state.vendor
}

export default { namespaced: true, state, mutations, actions, getters }