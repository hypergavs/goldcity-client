<template>
    <el-row class="registration-wrapper" type="flex" align="middle" justify="center">
        <el-col :xl="6" :md="10" :sm="15" :xs="22" class="registration-form">
            <el-row type="flex" align="start" justify="center">
                <el-col :span="20" id="logo">
                    <img src="/static/img/logo.png" style="height: 70px; width: 70px;" />
                </el-col>
            </el-row>
            <el-row type="flex" align="start" justify="center">
                <el-col :span="6" class="text-center">Register</el-col>
            </el-row>
            <el-form :model="registerData" :rules="rules" ref="form">
                <el-row>
                    <el-col>
                        <el-form-item label="Email" prop="email">
                            <el-input placeholder="Email Address" v-model="registerData.email" type="text">
                                <template slot="prepend">
                                    <i class="material-icons">account_circle</i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Password" prop="password">
                            <el-input placeholder="Password" v-model="registerData.password" type="password">
                                <template slot="prepend">
                                    <i class="material-icons">lock</i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Repeat Password" prop="re_password">
                            <el-input placeholder="Repeat Password" v-model="registerData.re_password" type="password">
                                <template slot="prepend">
                                    <i class="material-icons">lock</i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="First Name" prop="first_name">
                            <el-input placeholder="First Name" v-model="registerData.first_name" type="text">
                                <template slot="prepend">
                                    <i class="material-icons">check</i>
                                </template>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="Last Name" prop="last_name">
                            <el-input placeholder="Last Name" v-model="registerData.last_name" type="text">
                                <template slot="prepend">
                                    <i class="material-icons">check</i>
                                </template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" class="d-block" align="bottom">
                    <el-col :span="12">
                        <el-button type="primary" class="full-width" round @click="validate">Register</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-row>
                <el-col :span="24">
                    Do you already have account?  <router-link type="primary" :to="{ name: 'login' }">Login</router-link>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
            registerData: {
                email: '',
                password: '',
                re_password: '',
                first_name: '',
                last_name: ''
            },

            rules: {
                email: [
                    { required: true }
                ],

                password: [
                    { required: true }
                ],

                re_password: [
                    { required: true }
                ],

                first_name: [
                    { required: true }
                ],

                last_name: [
                    { required: true }
                ]
            }
        }
    },

    methods: {
        ...mapActions('authStore', ['processRegistrationToAPI']),
        
        validate () {
            this.$refs.form.validate(valid => {
                if (! valid) {
                    return
                }

                this.register()
            })
        },

        register() {
            this.processRegistrationToAPI(this.registerData)
                .then(response => {
                    this.$notify({
                        title: 'Title',
                        message: 'Registration Successful!'
                    });
                })
                .catch(error => {

                })
        }
        
    }
}
</script>
<style lang="scss" scoped>
.registration-wrapper {
    height: 100vh;
    background: url("/static/img/startup-photos.jpg");
    background-attachment: fixed;
    background-size: cover;
    .registration-form {
        background: #fff;
        border-radius: 5px;
        min-height: 400px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        div {
            margin: 5px 0px;
            i {
                color: #000;
            }
        }
    }
    .full-width {
        display: block;
        width: 100%;
    }
    #logo {
        display: flex;
        justify-content: center;
    }
}
</style>