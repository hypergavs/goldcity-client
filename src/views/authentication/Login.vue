<template>
    <el-row class="login-wrapper" type="flex" align="middle" justify="center">
        <el-col :xl="6" :md="10" :sm="15" :xs="22" class="login-form">
            <el-row type="flex" align="start" justify="center">
                <el-col :span="20" id="logo">
                    <img src="/static/img/logo.png" style="height: 70px; width: 70px;" />
                </el-col>
            </el-row>
            <el-row type="flex" align="start" justify="center">
                <el-col :span="6" class="text-center">
                    Login
                </el-col>
            </el-row>
            <el-form :model="userData" :rules="rules" ref="form">
                <el-row>
                    <el-col>
                        <el-form-item label="Email" prop="email">
                            <el-input v-model="userData.email" placeholder="Email" type="text">
                                <template slot="prepend">
                                    <i class="material-icons">
                                        account_circle
                                    </i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input v-model="userData.password" placeholder="Password" type="password">
                                <template slot="prepend">
                                    <i class="material-icons">
                                        lock
                                    </i>
                                </template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="d-block" align="bottom">
                    <el-col :span="12">
                        <el-checkbox v-model="remember_user">Remember Me</el-checkbox>
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="validate" type="primary" class="full-width" round>
                            Login
                        </el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-row>
                <el-col :span="24">
                    Don't have account yet? <router-link type="primary" :to="{ name: 'register' }">Register</router-link>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import { mapActions } from 'vuex'
import ValidationMixin from '../../mixins/validation'

export default {
    mixins: [ValidationMixin],

    data: function() {
        return {
            userData: {
                email: '',
                password: ''
            },

            remember_user: false,

            rules: {
                email: [
                    { required: true }
                ],

                password: [
                    { required: true }
                ]
            }
        }
    },

    methods: {
        ...mapActions('authStore', ['processLoginToAPI']),

        validate () {
            this.$refs.form.validate(valid => {
                if (! valid) {
                    return
                }

                this.login()
            })
        },

        login () {
            this.processLoginToAPI(this.userData)
                .then(response => {

                })
        }
    }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
    height: 100vh;
    background: url('/static/img/startup-photos.jpg');
    background-attachment: fixed;
    background-size: cover;
    .login-form{
        background: #FFF;
        border-radius: 5px;
        min-height: 400px;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
        padding: 20px;
        div{
            margin: 5px 0px;
            i{
                color: #000;
            }
        }
    }
    .full-width{
        display: block;
        width: 100%;
    }
    #logo{
        display: flex;
        justify-content: center;
    }
}
</style>