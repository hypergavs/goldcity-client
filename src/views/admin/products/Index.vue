<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    Products Page
                    <small>
                        It's all start from here
                        <i class="ti-heart"></i>
                        <i class="ti-export"></i>
                        <i class="ti-printer"></i>
                    </small>
                </h1>
                <ol class="breadcrumb">
                    <li>
                        <router-link to="/">
                            <i class="ti-home"></i>
                        </router-link>
                    </li>
                    <li>
                        <a href="#">Apps</a>
                    </li>
                    <li>Products Page</li>
                </ol>
            </section>
            <!-- Main content -->

            <section class="content">
                <el-row type="flex" justify="end" style="margin: 10px auto">
                    <el-col :span="5">
                        <el-button
                            type="success"
                            round
                            style="display: block; width: 100%;"
                            @click="dialogVisible = true"
                        >
                            <i class="ti-plus"></i>
                            Add
                        </el-button>
                    </el-col>
                </el-row>
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">All Products</h3>
                        <div class="box-tools pull-right">
                            <button
                                type="button"
                                data-widget="collapse"
                                data-toggle="tooltip"
                                title="Collapse"
                                class="btn btn-box-tool"
                            >
                                <i class="ti-minus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="box-body">
                        <el-table :data="products" style="width: 100%">
                            <el-table-column prop="product_name" label="Name"></el-table-column>
                            <el-table-column prop="description" label="Description"></el-table-column>
                            <el-table-column prop="unit_price" label="Price"></el-table-column>
                            <el-table-column prop="units_in_stock" label="Stock"></el-table-column>
                            <el-table-column label="Actions">
                                <template slot-scope="scope">
                                    <el-button
                                        type="primary"
                                        @click="editProduct( scope.$index )"
                                        icon="el-icon-edit"
                                        circle
                                    ></el-button>
                                    <el-button type="danger" @click="removeProduct( scope.$index )" icon="el-icon-delete" circle></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </section>
            <!-- /.content -->
            <add-product-dialog
                :dialogVisible="dialogVisible"
                @closeAddProductDialog="closeAddProductDialog()"
                :currentIndex="currentIndex"
            />
        </div>1
    </transition>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AddProductDialog from "./dialogs/AddProduct";

export default {
    name: "VendorsPage",

    components: {
        AddProductDialog
    },

    data: () => ({
        dialogVisible: false,
        currentIndex: null
    }),

    computed: {
        ...mapGetters("productStore", {
            products: "products",
            product: "product"
        })
    },

    methods: {
        ...mapMutations("productStore", ["SET_PRODUCT", "CLEAR_PRODUCT"]),
        ...mapActions('productStore', ['processRemoveProduct']),

        closeAddProductDialog() {
            this.dialogVisible = false;
            this.currentIndex = null;
            this.CLEAR_PRODUCT();
        },

        editProduct(index, products) {
            this.SET_PRODUCT(this.products[index]);
            this.dialogVisible = true;
            this.currentIndex = index;
        },

        removeProduct(index) {
            this.$confirm(
                "This will permanently delete the product. Continue?",
                "Warning",
                {
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    type: "warning"
                }
            )
                .then(() => {
                    this.processRemoveProduct(index)
                    this.$message({
                        type: "success",
                        message: "Delete completed"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "Delete canceled"
                    })
                })
        }
    }
};
</script>
