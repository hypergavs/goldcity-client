<template>
    <el-dialog
        title="Add Product"
        :visible.sync="dialogVisible"
        width="30%"
        :close-on-click-modal="false"
        :before-close="closeAddProductDialog"
    >
        <el-row type="flex" justify="center" align="center">
            <el-col :span="24">
                <el-form :model="product" :rules="product_validation_rule" ref="form">
                    <el-form-item prop="product_name">
                        <el-row>
                            <el-col>
                                <el-input placeholder="Product Name" v-model="product.product_name"></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item prop="description">
                    <el-row style="margin: 10px auto;">
                        <el-col>
                            <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="Desctiption"
                                v-model="product.description"
                            ></el-input>
                        </el-col>
                    </el-row>
                    </el-form-item>
                    <el-form-item prop="unit_price">
                        <el-row style="margin: 10px auto;">
                            <el-col>
                                <el-input
                                    placeholder="Unit Price"
                                    type="number"
                                    v-model="product.unit_price"
                                ></el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item prop="units_in_stock">
                    <el-row>
                        <el-col>
                            <el-input
                                placeholder="Stock"
                                type="number"
                                v-model.number="product.units_in_stock"
                            ></el-input>
                        </el-col>
                    </el-row>
                    </el-form-item>
                    <el-form-item prop="product_image">
                        <el-row style="margin: 10px auto;">
                            <el-col>
                                <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                >
                                <el-button size="small" type="primary">Add File Image</el-button>
                                <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
                                </el-upload>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>

        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('closeAddProductDialog')">Cancel</el-button>
            <el-button type="primary" @click="validate()">Save</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
import ValidationMixin from '../../../../mixins/validation'
import ProductValidationMixin from '../../../../mixins/product-validation'
export default {
    props: ["dialogVisible", "currentIndex"],

    mixins: [
        ValidationMixin,
        ProductValidationMixin
    ],

    data: () => ({
    }),

    computed: {
        ...mapGetters("productStore", {
            product: "product"
        })
    },

    methods: {
        ...mapActions("productStore", [
            "processAddProduct",
            "processUpdateProduct"
        ]),

        closeAddProductDialog() {
            this.$emit("closeAddProductDialog");
        },

        validate() {
            this.$refs.form.validate(valid => {
                if (!valid) {
                    return;
                }
                
                this.saveProduct();
            });
        },

        saveProduct() {
            if (this.currentIndex == null) {
                this.processAddProduct(this.product).then(response => {
                    this.$notify({
                        title: "Product",
                        message: "Added Product Successfuly!"
                    });
                    this.$emit("closeAddProductDialog");
                });
            } else {
                this.processUpdateProduct(this.product).then(response => {
                    this.$notify({
                        title: "Product",
                        message: "Updated Product Successfuly!"
                    });
                    this.$emit("closeAddProductDialog");
                });
            }
        },

        handleRemove(file, fileList) {
            console.log(file, fileList)
        },

        handlePreview(file) {
            console.log(file)
        }
    }
};
</script>
<style lang="scss">
    .el-upload{
        input[type="file"]{
            display: none;
        }
    }
</style>