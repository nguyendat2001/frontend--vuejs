<template>
<div class="container">
    <div>
        <section class="h-100 gradient-custom">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-10 col-xl-8">
                  <div class="card w-100" style="border-radius: 10px;">
                    <div class="card-header w-100 px-4 py-5">
                      <h5 class="text-muted mb-0">Thanks for your <span style="color: #a8729a;">Order</span>!</h5>
                    </div>
                    <div class="card-body w-100 p-4">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="lead fw-normal mb-0" style="color: #a8729a;">Receipt</p>
                        <p class="small text-muted mb-0">Receipt ID : {{this.order._id}}</p>
                      </div>
                      <div v-for="(product,index) in this.order.product_list" class=" w-100 card shadow-0 border mb-4">
                        <div class="card-body w-100 ">
                          <div class="row">
                            <div class="col-md-2">
                              <img :src="'http://localhost:3000/images/'+product.image"
                                class="img-fluid" alt="Phone">
                            </div>
                            <div class="col-md-4 text-center d-flex justify-content-center align-items-center">
                              <p class="text-muted mb-0">{{product.name}}</p>
                            </div>
                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p class="text-muted mb-0 small"></p>
                            </div>
                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p class="text-muted mb-0 small">{{product.number}}</p>
                            </div>
                            <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                              <p class="text-muted mb-0 small">${{product.price}}</p>
                            </div>
                          </div>
                          <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                          <div class="row d-flex align-items-center">
                            <div class="col-md-2">
                              <p class="text-muted mb-0 small">Track Order</p>
                            </div>
                            <div class="col-md-10">
                              <div class="progress" style="height: 6px; border-radius: 16px;">
                                <div class="progress-bar" role="progressbar"
                                  style="width: 100%; border-radius: 16px; background-color: #a8729a;" aria-valuenow="100"
                                  aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
          
                      <div class="d-flex justify-content-between pt-2">
                        <p class="fw-bold mb-0">Order Details</p>
                        <p class="text-muted mb-0"><span class="fw-bold me-4">Total</span> ${{this.order.total_cost}}</p>
                      </div>
          
                      <div class="d-flex justify-content-between pt-2">
                        <p class="text-muted mb-0">Invoice Number : {{this.order._id}}</p>
                        <p class="text-muted mb-0"><span class="fw-bold me-4">Discount</span> $0.00</p>
                      </div>
          
                      <div class="d-flex justify-content-between">
                        <p class="text-muted mb-0">Invoice Date-Time : {{this.order.date_time}}</p>
                        <p class="text-muted mb-0"><span class="fw-bold me-4"></span> </p>
                      </div>
          
                      <div class="d-flex justify-content-between mb-5">
                        <p class="text-muted mb-0">Recepits Voucher : None</p>
                        <p class="text-muted mb-0"><span class="fw-bold me-4">Delivery Charges</span> Free</p>
                      </div>
                    </div>
                    <div class="card-footer border-0 px-4 py-5"
                      style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                      <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                        paid: <span class="h2 mb-0 ms-2">${{this.order.total_cost}}</span></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
</div>
</template>
<script>
import orderService from "@/services/order.service";
export default {
    components: {
        orderService,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            order:{},
        };
    },
    methods: {
        async getorders(){
            try {
                this.order = await orderService.get(this.id);
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