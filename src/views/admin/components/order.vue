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
        <div class="row">
            <section class="section">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4 class="mt-1">order Datatable</h4>
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal">Add</button>
                    </div>
                    <div class="card-body">
                        <table class="table table-striped" id="table1">
                            <thead>
                                <tr>
                                    <th>user_ID</th>
                                    <th>payments</th>
                                    <th>date_time</th>
                                    <th>destination</th>
                                    <th>Status</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                                <tr v-if="this.orders.length > 0"
                                    v-for="(order,index) in this.orders"
                                    :key="order._id" 
                                >
                                        <td>
                                            <button type="button" @click="selected_product(order.user_id,order.product_list)" class="btn btn-link" data-mdb-ripple-color="dark">{{order.user_id}}</button>
                                        </td>
                                        <td>{{order.total_cost}}</td>
                                        <td>{{order.date_time}}</td>
                                        <td>{{order.destination}}</td>
                                        <td>
                                            <button type="button" class="btn btn-success" v-if="order.status == true" >Approve</button>
                                            <button type="button" class="btn btn-secondary" data-mdb-ripple-color="dark" @click="approve(order._id)"  v-else >Waitting</button>
                                        </td>
                                        <td>
                                            <!-- <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" @click="Deleteorder(order._id)"><i class="fas fa-trash-alt"></i></button> -->
                                            <div class="btn-group" role="group">
                                                <!-- <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" ><i class="fas fa-edit"></i></button> -->
                                                <button type="button"  class="btn btn-link" data-mdb-ripple-color="dark" @click="Deleteorder(order._id)" ><i class="fas fa-trash-alt"></i></button>
                                            </div>
                                        </td>
                                </tr>
                                <tr v-else>Không có san pham nào.</tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
                <section class="section col-6 mt-3" v-if="this.user.name !=null">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h4 class="mt-1"> user detail</h4>
                        </div>
                        <div class="card-body row ">
                            <table class="table">
                                <thead style="width:100%">
                                  <tr>
                                    <th scope="col" style="width:10%"><b>name</b></th>
                                    <td scope="col">{{this.user.name}}</td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td><b>email</b></td>
                                    <td>{{this.user.email}}</td>
                                  </tr>
                                  <tr>
                                    <td><b>address</b></td>
                                    <td>{{this.user.address}}</td>
                                  </tr>
                                  <tr>
                                    <td><b>phone</b></td>
                                    <td>{{this.user.phone}}</td>
                                  </tr>
                                </tbody>
                              </table>
                            <!-- <div class="col-4 border">
                                <ul>
                                    <li>name</li>
                                    <li>email</li>
                                    <li>address</li>
                                    <li>phone</li>
                                </ul>
                            </div>
                            <div class="col-8 border">
                                <ul>
                                    <td>{{this.user.name}}</td>
                                    <td>{{this.user.email}}</td>
                                    <td>{{this.user.address}}</td>
                                    <td>{{this.user.phone}}</td>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </section>
                <br>
                <section class="section col-6 mt-3" v-if="this.listProduct.length > 0">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <h4 class="mt-1">product detail in order</h4>
                        </div>
                        <div class="card-body">
                            <table class="table table-striped" id="table1">
                                <thead>
                                    <tr>
                                        <th>product name</th>
                                        <th>price</th>
                                        <th>quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr 
                                    v-for="(product,index) in listProduct"
                                    >
                                            <td>{{product.name}}</td>
                                            <td>{{product.price}}</td>
                                            <td>{{product.number}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

        </div>
    </div>

    <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header header">
              <h4 class="modal-title">Add New orders</h4>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body">
                <addorderForm :order="data" @add:order="createorder(this.data)"/>
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
// import addorderForm from "./addorder.vue";
import orderService from "@/services/order.service";
import userService from "@/services/user.service";
export default {
    components: {
        userService,
        // addorderForm,
        orderService,
    },
    data() {
        return {
            data:{},
            orders:[],
            listProduct:[],
            user:{},
            activeIndex: -1,
        };
    },
    methods: {
        async getAllorders(){
            try {
                this.orders = await orderService.getAll();
                console.log(this.orders)
            } catch (error) {
                console.log(error);
            }
        },

        async createorder(data){
            try{
                await orderService.create(data);
                this.message = "order được tao thành công.";
                this.getAllorders();
                console.log(this.message);
            } catch(err) {
                console.log(err);
            }
        },
        async Deleteorder(id) {
            try{
                await orderService.delete(id);
                this.getAllorders();
            } catch(err) {
                console.log(err);
            }
        },

        async selected_product(id,data){
            this.listProduct = data;
            this.user = await userService.get(id);
        },

        refreshList() {
            this.getAllorders();
            this.activeIndex = -1;
        },
        
        async approve(id){
            try {
                await orderService.approve(id);
                this.getAllorders();
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