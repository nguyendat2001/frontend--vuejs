<template>
    <div class="container">
        <div class="">
            <h2>
                Your order
            </h2>
            <hr>
        </div>
        <div class="">
            <section v-for="(order,index) in this.orders"
            :key="order._id" class="" style="background-color: #8c9eff;">
                <router-link
                :to="{
                    name: 'user.order.detail',
                    params: { id: order._id },
                }"
                >
                <div class="container py-5 h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                      <div class="w-100 card card-stepper text-black" style="border-radius: 16px;">
              
                        <div class="card-body p-5">

                          <div class="d-flex justify-content-between align-items-center mb-5">
                            <div class="row">
                              <h5 class="mb-0">INVOICE <span class="text-primary font-weight-bold">#{{order._id}}</span></h5>
                              <button type="button" class="btn btn-info" >detail</button>
                            </div>
                            <div class="text-end">
                              <p class="mb-0">Date Time: <span>{{order.date_time}}</span></p>
                              <p class="mb-0">User ID: <span class="font-weight-bold">{{order.user_id}}</span></p>
                              <p class="mb-0">Total Cost: <span class="font-weight-bold">{{order.total_cost}}</span></p>
                            </div>
                          </div>
              
                          <ul id="progressbar-2" class="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                            <li v-if="order.status == true" class=" step0 active text-center" id="step1"></li>
                            <li v-else class=" step0 text-center" id="step1"></li>
                            <li class="step0 text-center" id="step2"></li>
                            <li class="step0 text-center" id="step3"></li>
                            <li class="step0 text-muted text-end" id="step4"></li>
                          </ul>
              
                          <div class="d-flex justify-content-between">
                            <div class="d-lg-flex align-items-center">
                              <i class="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                              <div>
                                <p class="fw-bold mb-1">Order</p>
                                <p class="fw-bold mb-0">Processed</p>
                              </div>
                            </div>
                            <div class="d-lg-flex align-items-center">
                              <i class="fas fa-box-open fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                              <div>
                                <p class="fw-bold mb-1">Order</p>
                                <p class="fw-bold mb-0">Shipped</p>
                              </div>
                            </div>
                            <div class="d-lg-flex align-items-center">
                              <i class="fas fa-shipping-fast fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                              <div>
                                <p class="fw-bold mb-1">Order</p>
                                <p class="fw-bold mb-0">En Route</p>
                              </div>
                            </div>
                            <div class="d-lg-flex align-items-center">
                              <i class="fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0"></i>
                              <div>
                                <p class="fw-bold mb-1">Order</p>
                                <p class="fw-bold mb-0">Arrived</p>
                              </div>
                            </div>
                          </div>
              
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                </router-link>
            </section>
        </div>
    </div>
</template>
<script>
import { userAccStore } from "@/Store/userStore";
import orderService from "@/services/order.service";
export default {
    components: {
        orderService,
    },
    data() {
        const AccountStore = userAccStore();
        return {
            AccountStore,
            data:{},
            orders:[],
        };
    },
    methods: {
        async getorders(){
            try {
                this.orders = await orderService.findByUserId(this.AccountStore.user._id);
                console.log(this.orders)
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.getorders();
            this.activeIndex = -1;
        },
    
        
    },
    mounted() {
        this.refreshList();
    },
}
</script>
<style>
.card-stepper {
    z-index: 0
    }
    
    #progressbar-2 {
    color: #455A64;
    }
    
    #progressbar-2 li {
    list-style-type: none;
    font-size: 13px;
    width: 33.33%;
    float: left;
    position: relative;
    }
    
    #progressbar-2 #step1:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-left: 0px;
    padding-left: 0px;
    }
    
    #progressbar-2 #step2:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    }
    
    #progressbar-2 #step3:before {
    content: '\f058';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
    }
    
    #progressbar-2 #step4:before {
    content: '\f111';
    font-family: "Font Awesome 5 Free";
    color: #fff;
    width: 37px;
    margin-right: 0;
    text-align: center;
    }
    
    #progressbar-2 li:before {
    line-height: 37px;
    display: block;
    font-size: 12px;
    background: #c5cae9;
    border-radius: 50%;
    }
    
    #progressbar-2 li:after {
    content: '';
    width: 100%;
    height: 10px;
    background: #c5cae9;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 15px;
    z-index: -1;
    }
    
    #progressbar-2 li:nth-child(1):after {
    left: 1%;
    width: 100%
    }
    
    #progressbar-2 li:nth-child(2):after {
    left: 1%;
    width: 100%;
    }
    
    #progressbar-2 li:nth-child(3):after {
    left: 1%;
    width: 100%;
    background: #c5cae9 !important;
    }
    
    #progressbar-2 li:nth-child(4) {
    left: 0;
    width: 37px;
    }
    
    #progressbar-2 li:nth-child(4):after {
    left: 0;
    width: 0;
    }
    
    #progressbar-2 li.active:before,
    #progressbar-2 li.active:after {
    background: #6520ff;
    }
</style>