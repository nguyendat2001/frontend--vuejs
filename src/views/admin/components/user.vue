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
            <div class="card ">
                <div class="card-header d-flex justify-content-between row">
                    <div class="row" style="width:600px;">
                        <h4 class="col-4 mt-1">User Datatable</h4>
                        <div class="col-8"><input class=" w3-input" v-model="searchText" type="text" placeholder="search"></div>
                        
                    </div>
                    <!-- <div class="row" style="width:600px;">
                        
                    </div> -->
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
                                <th>email</th>
                                <th>Phone</th>
                                <th>address</th>
                                <th>Status</th>
                                <th>delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="this.users.length > 0"
                                v-for="(User,index) in this.filteredusers"
                                :key="User._id" 
                                >
                                <td>
                                    {{User.name}}
                                </td>
                                <td>{{User.email}}</td>
                                <td>{{User.phone}}</td>
                                <td>{{User.address}}</td>
                                <td>
                                    <button type="button" class="btn btn-outline-info" data-mdb-ripple-color="dark" @click="lock(User._id)"  v-if="User.mail_verify == true" >Active</button>
                                    <button type="button" class="btn btn-outline-danger" data-mdb-ripple-color="dark" @click="unLock(User._id)"  v-else >Inactive</button>
                                </td>
                                <td>
                                    <!-- <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" @click="DeleteUser(User._id)"><i class="fas fa-trash-alt"></i></button> -->
                                    <div class="btn-group" role="group">
                                        <!-- <button type="button" class="btn btn-link" data-mdb-ripple-color="dark" ><i class="fas fa-edit"></i></button> -->
                                        <button type="button"  class="btn btn-link" data-mdb-ripple-color="dark" @click="DeleteUser(User._id)" ><i class="fas fa-trash-alt"></i></button>
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
              <h4 class="modal-title">Add New Users</h4>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body">
                <addUserForm :User="data" @add:User="createUser(this.data)"/>
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
// import addUserForm from "./addUser.vue";
import UserService from "@/services/user.service";
export default {
    components: {
        UserService,
    },
    data() {
        return {
            data:{},
            users:[],
            activeIndex: -1,
            searchText:'',
            selectedValue: "",

        };
    },
    watch: {
        'searchText' : function(v) {
            console.log(v);
            this.searchText = v.toLowerCase().trim();
        },
    // Giám sát các thay đổi của biến searchText.
        'selectedValue' : function(v) {
            console.log(v);
            this.selectedValue = v;
        },
    // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        proxySelected: {
            // get() {
            //     return this.list.includes(this.selected) ? this.selected : null;
            // },
            set(newValue) {
                if (newValue) {
                this.selectedValue = newValue;
                }
            }
        },
        // Chuyển các đối tượng product thành chuỗi để tiện cho tìm kiếm.
        userstrings() {
            return this.users.map((user) => {
                const { name, address, email, phone, mail_verify } = user;
                return [name, address, email, phone, mail_verify ].join("").toLowerCase();
            });
        },
        // Trả về các product có chứa thông tin cần tìm kiếm.
        filteredusers() {
            if (!this.searchText) return this.users;
            return this.users.filter((_product, index) =>
                this.userstrings[index].includes(this.searchText)
            );
        },

        activeproduct() {
            if (this.activeIndex < 0) return null;
            return this.filteredusers[this.activeIndex];
        },

        filteredusersCount() {
            return this.filteredusers.length;
        },

    },
    methods: {
        async getAllUsers(){
            try {
                this.users = await UserService.getAll();
                console.log(this.users);
            } catch (error) {
                console.log(error);
            }
        },

        async createUser(data){
            try{
                await UserService.create(data);
                this.message = "User được tao thành công.";
                await this.getAllUsers();
                console.log(this.message);
            } catch(err) {
                console.log(err);
            }
        },
        async DeleteUser(id) {
            try{
                const result = await UserService.delete(id);
                await this.getAllUsers();
            } catch(err) {
                console.log(err);
            }
        },
        refreshList() {
            this.getAllUsers();
            this.activeIndex = -1;
        },
        
        async lock(id){
            try {
                const result = await UserService.lockUser(id);
                await this.getAllUsers();
            } catch (error) {
                console.log(error);
            }
        },

        async unLock(id){
            try {
                const result = await UserService.unLockUser(id);
                await this.getAllUsers();
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