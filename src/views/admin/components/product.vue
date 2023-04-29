<template>
    <div class="page-heading" style="">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-8 order-md-1 order-last">
                    <h3>DataTable</h3>
                    <p class="text-subtitle text-muted">A sortable, searchable, paginated table without dependencies thanks to simple-datatables.</p>
                </div>
                <div class="col-12 col-md-4 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">DataTable</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header d-flex justify-content-between row">
                    <div class="row" style="width:600px;">
                        <h4 class="col-4 mt-1">Product Datatable</h4>
                        <div class="col-8"><input class=" w3-input" v-model="searchText" type="text" placeholder="search"></div>
                    </div>
                    <div class="col-2">
                        <select class=" form-select">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal">Add</button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-striped" id="table1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>description</th>
                                <th>image</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>Produce Place</th>
                                <th>Status</th>
                                <th>edit/delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="this.filteredproducts.length > 0"
                                v-for="(product,index) in this.filteredproducts"
                                :key="product._id" 
                                >
                                <!-- <td>{{product.name}}</td> -->
                                <td>
                                    <div class="d-flex align-items-center">
                                      <div class="ms-3">
                                        <h5 class="fw-bold mb-1">{{product.name}}</h5>
                                        <p class="text-muted mb-0">{{product.manufacture}}</p>
                                      </div>
                                    </div>
                                </td>
                                <td>{{product.description}}</td>
                                <td>{{product.image}}</td>
                                <td>{{product.price}}</td>
                                <td>{{product.quantity}}</td>
                                <td>{{product.manufacture}}</td>
                                <td>
                                    <button type="button" class="btn btn-outline-info" data-mdb-ripple-color="dark" @click="unavailable(product._id)" v-if="product.available == true" >Active</button>
                                    <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark" @click="available(product._id)"  v-else >Inactive</button>
                                </td>

                                <td>
                                    <!-- <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" @click="DeleteProduct(product._id)"><i class="fas fa-trash-alt"></i></button> -->
                                    <div class="btn-group" role="group">
                                        <router-link
                                        :to="{
                                            name: 'admin.product.edit',
                                            params: { id: product._id },
                                        }"
                                        >
                                        <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" ><i class="fas fa-edit"></i></button>
                                        </router-link>
                                        <button type="button"  @click="DeleteProduct(product._id)" class="btn btn-link" data-mdb-ripple-color="dark"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                
                                </td>

                            

                            </tr>
                            <tr v-else>Không có san pham nào.</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>

    <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header header">
              <h4 class="modal-title">Add New Products</h4>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body">
                <addProductForm @add:product="createProduct"/>
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
    </div>

</template>

<script>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
import addProductForm from "./addProduct.vue";
import ProductService from "@/services/product.service";
export default {
    components: {
        addProductForm,
        ProductService,
    },
    data() {
        return {
            product:{},
            products:[],
            activeIndex: -1,
            searchText:'',
        };
    },
    watch: {
        'searchText' : function(v) {
            this.searchText = v.toLowerCase().trim();
        },
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
        productStrings() {
            return this.products.map((product) => {
                const { name, description, price, quantity, available, manufacture, brand } = product;
                return [name, description, price, quantity,available,manufacture,brand].join("").toLowerCase();
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredproducts() {
            if (!this.searchText) return this.products;
                return this.products.filter((_product, index) =>
                this.productStrings[index].includes(this.searchText)
            );
        },

        activeproduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredproducts[this.activeIndex];
        },

        filteredproductsCount() {
            return this.filteredproducts.length;
        },

    },
    methods: {
        async getAllProducts(){
            try {
                this.products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        async createProduct(data){
            const formData = new FormData();
            formData.append('file',data.file);
            formData.append('image',data.file.name);
            formData.append('description',data.description);
            formData.append('price',data.price);
            formData.append('quantity',data.quantity);
            formData.append('name',data.name);
            formData.append('manufacture',data.manufacture);
            console.log(formData);
            try{
                console.log(formData);
                await ProductService.create(formData);
                this.message = "Product được tao thành công.";
                this.getAllProducts();
                console.log(this.message);
            } catch(err) {
                console.log(err);
            }
        },
        async DeleteProduct(id) {
            try{
                await ProductService.delete(id);
                this.getAllProducts();
            } catch(err) {
                console.log(err);
            }
        },
        refreshList() {
            this.getAllProducts();
            this.activeIndex = -1;
        },
        
        async unavailable(id){
            try {
                await ProductService.unavailable(id);
                this.getAllProducts();
            } catch (error) {
                console.log(error);
            }
        },

        async available(id){
            try {
                await ProductService.available(id);
                this.getAllProducts();
            } catch (error) {
                console.log(error);
            }
        },
        
    },
    mounted() {
        this.refreshList();
    },
    };
</script>

<style scoped src="@/assets/navbar.css">
@import './assets/navbar.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';
</style>