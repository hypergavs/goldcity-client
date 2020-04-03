<template>
    <transition name="el-zoom-in-top">
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <h1>
                    Vendor's Page
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
                    <li>Vendor</li>
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
                        <h3 class="box-title">All Vendors</h3>
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
                        <el-table :data="vendors" style="width: 100%">
                            <el-table-column prop="vendor_name" label="Name"></el-table-column>
                            <el-table-column prop="contact" label="Contact"></el-table-column>
                            <el-table-column prop="about" label="About"></el-table-column>
                            <el-table-column label="Actions">
                                <template slot-scope="scope">
                                    <el-button
                                        type="primary"
                                        @click="editVendor( scope.$index )"
                                        icon="el-icon-edit"
                                        circle
                                    ></el-button>
                                    <el-button type="danger" @click="removeVendor( scope.$index )" icon="el-icon-delete" circle></el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </section>
            <!-- /.content -->
            <add-vendor-dialog
                :dialogVisible="dialogVisible"
                @closeAddVendorDialog="closeAddVendorDialog()"
                :currentIndex="currentIndex"
            />
        </div>1
    </transition>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AddVendorDialog from "./dialogs/AddVendor";

export default {
    name: "VendorsPage",

    components: {
        AddVendorDialog
    },

    data: () => ({
        dialogVisible: false,
        currentIndex: null
    }),

    computed: {
        ...mapGetters("vendorStore", {
            vendors: "vendors",
            vendor: "vendor"
        })
    },

    methods: {
        ...mapMutations("vendorStore", ["SET_VENDOR", "CLEAR_VENDOR"]),
        ...mapActions('vendorStore', ['processRemoveVendor']),

        closeAddVendorDialog() {
            this.dialogVisible = false;
            this.currentIndex = null;
            this.CLEAR_VENDOR();
        },

        editVendor(index, vendors) {
            this.SET_VENDOR(this.vendors[index]);
            this.dialogVisible = true;
            this.currentIndex = index;
        },

        removeVendor(index) {
            this.$confirm(
                "This will permanently delete the vendor. Continue?",
                "Warning",
                {
                    confirmButtonText: "OK",
                    cancelButtonText: "Cancel",
                    type: "warning"
                }
            )
                .then(() => {
                    this.processRemoveVendor(index)
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
