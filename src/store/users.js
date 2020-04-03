import { HTTP_API } from '@/helpers/http'

const initialState = () => ({
    registration: {
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    }
})

const state = initialState();

const mutations = {

}

const actions = {
    processRegistrationToAPI(registrationData){
        HTTP_API().post('register', registrationData)
            .then(response => {
                console.log(response)
            })

    }
}

const getters = {
    registration: state => state.registration
}

export default { namespaced: true, state, mutations, actions, getters }