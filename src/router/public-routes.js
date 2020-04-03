import LoginComponent from '../views/authentication/Login'
import RegisterComponent from '../views/authentication/Register'

export default [
    {
        name: 'login',
        path: '/',
        component: LoginComponent
    },
    {
        name: 'register',
        path: 'register',
        component: RegisterComponent
    },
]