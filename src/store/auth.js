import { HTTP_API } from '@/helpers/http'

const initialState = () => {

}

const state = initialState();

const mutations = {
    SET_TOKEN(state, token) {
        localStorage.setItem('auth-token', JSON.stringify(token))
        state.token = token
    },
    
    UNSET_TOKEN() {
        localStorage.removeItem('auth-token')
        state.token = null
    },

    SET_USER(state, user) {
        state.user = user
    },

    SET_ROLE_ACCESS(state, role_access) {
        state.role_access = role_access
    },
    
    RESET_STATE(state) {
        Object.assign(state, initialState())
    }
}

const actions = {
    processLoginToAPI ({ commit }, loginData) {
        HTTP_API().post('user/login', loginData)
            .then(response => {
                console.log(response)
            })
    },

    processRegistrationToAPI ({ commit }, registerData) {
        HTTP_API().post('auth/register', registerData)
            .then(response => {
                console.log(response)
            })
    },
    

    resetAllApplicationState({ commit }) {
        // First Unset Token ...
        commit('UNSET_TOKEN')
        // Reset Auth State ...
        commit('RESET_STATE')
            
        return
    },
}

const getters = {

}

export default { namespaced: true, state, mutations, actions, getters }