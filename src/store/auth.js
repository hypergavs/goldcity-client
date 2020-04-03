import { HTTP_API } from '@/helpers/http'

const initialState = () => {

}

const state = initialState();

const mutations = {

}

const actions = {
    processLoginToAPI ({ commit }, loginData) {
        HTTP_API().post('auth/login', loginData)
            .then(response => {
                console.log(response)
            })
    },

    processRegistrationToAPI ({ commit }, registerData) {
        HTTP_API().post('auth/register', registerData)
            .then(response => {
                console.log(response)
            })
    }
}

const getters = {

}

export default { namespaced: true, state, mutations, actions, getters }