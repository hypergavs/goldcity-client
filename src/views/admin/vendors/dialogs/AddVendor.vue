<template>
    <el-dialog
        title="Add Vendor"
        :visible.sync="dialogVisible"
        width="30%"
        :close-on-click-modal="false"
        :before-close="closeAddVendorDialog"
    >
        <el-row type="flex" justify="center" align="center">
            <el-col :span="24">
                <el-form :model="vendor" :rules="vendor_validation_rule" ref="form">
                    <el-form-item prop="vendor_name">
                        <el-row>
                            <el-col>
                                <el-input placeholder="Vendor Name" v-model="vendor.vendor_name"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item prop="contact">
                        <el-row style="margin: 10px auto;">
                            <el-col>
                                <el-input placeholder="Contact" v-model="vendor.contact"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item prop="about">
                        <el-row style="margin: 10px auto;">
                            <el-col>
                                <el-input
                                    type="textarea"
                                    :rows="2"
                                    placeholder="About"
                                    v-model="vendor.about"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('closeAddVendorDialog')">Cancel</el-button>
            <el-button type="primary" @click="validate()">Save</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ValidationMixin from '../../../../mixins/validation'
import VendorValidationMixin from '../../../../mixins/vendor-validation'

export default {
    props: ["dialogVisible", "currentIndex"],

    mixins:[
        ValidationMixin,
        VendorValidationMixin
    ],

    computed: {
        ...mapGetters("vendorStore", {
            vendor: "vendor"
        })
    },

    methods: {
        ...mapActions("vendorStore", ["processAddVendor", "processUpdateVendor"]),

        closeAddVendorDialog() {
            this.$emit("closeAddVendorDialog");
        },

        validate(){
            this.$refs.form.validate(valid => {
                if (!valid) {
                    return;
                }
                
                this.saveVendor();
            })
        },

        saveVendor() {
            if (this.currentIndex==null) {
                this.processAddVendor(this.vendor).then(response => {
                    this.$notify({
                        title: "Vendor",
                        message: "Added Vendor Successfuly!"
                    });
                    this.$emit("closeAddVendorDialog");
                });
            } else {
                this.processUpdateVendor(this.vendor).then(response => {
                    this.$notify({
                        title: "Vendor",
                        message: "Updated Vendor Successfuly!"
                    });
                    this.$emit("closeAddVendorDialog");
                });
            }
        }
    }
};
</script>