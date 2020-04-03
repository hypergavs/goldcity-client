import { HTTP_API } from '@/helpers/http'

const initialState = () => ({
    products: [
        {
            id: 1,
            vendor_id: 1,
            product_name: 'Sample Product 1',
            description : 'This is just a sample product 1',
            unit_price: 1000,
            units_in_stock: 100,
        },
        {
            id: 2,
            vendor_id: 1,
            product_name: 'Sample Product 2',
            description : 'This is just a sample product 2',
            unit_price: 500,
            units_in_stock: 99,
        },
        {
            id: 3,
            vendor_id: 1,
            product_name: 'Sample Product 3',
            description : 'This is just a sample product 3',
            unit_price: 10,
            units_in_stock: 1000,
        }
    ],
    product: {
        product_name: '',
        description : '',
        unit_price: 0,
        units_in_stock: 0,
    }
})

const state = initialState();

const mutations = {
    CLEAR_PRODUCT(state){
        state.product = {
            product_name: '',
            description: '',
            unit_price: 0,
            units_in_stock: 0
        }
    },

    SET_PRODUCT(state, payload){
        state.product = payload
    },

    ADD_PRODUCT_TO_LIST(state, payload){
        state.products.push(payload)
    },

    UPDATE_PRODUCT(state, payload) {
        state.products[payload.index] = payload.value
    },

    REMOVE_PRODUCT(state, index){
        state.products.splice(index, 1)
    }
}

const actions = {
    processAddProduct( {commit}, product ) {
        // some http post request here
        commit('ADD_PRODUCT_TO_LIST', product)
        commit('CLEAR_PRODUCT')
    },

    processUpdateProduct( {commit}, product ) {
        commit('UPDATE_PRODUCT', product)
    },

    processRemoveProduct( {commit}, index ) {
        commit('REMOVE_PRODUCT', index)
    }
}

const getters = {
    products: state => state.products,

    product: state => state.product
}

export default { namespaced: true, state, mutations, actions, getters }