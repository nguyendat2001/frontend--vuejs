<template>
<div class="container">
    <section class="h-100" style="background-color: #eee;">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="card w-100">
                <div class="card-body p-4 w-100">
      
                  <div class="row">
      
                    <div class="col-lg-7">
                        <!-- <router-link
                        :to="{
                            name: 'user.products',
                        }"
                        > -->
                      <h5 class="mb-3">
                        <router-link
                          :to="{
                              name: 'user.products',
                          }"
                          >
                          <a href="#!" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a>
                        </router-link>
                        </h5>
                      <!-- </router-link> -->
                      <hr>
      
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p class="text-danger" >{{this.message}}</p>
                          <p class="mb-1">Shopping cart</p>
                          <p class="mb-0">You have {{this.cart.product_list.length}} items in your cart</p>
                        </div>
                        <div>
                          <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                              class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>
      
                      <div class="card mb-3 w-100" v-for="(product,index) in this.cart.product_list">
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  :src="'http://localhost:3000/images/'+product.image"
                                  class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                              </div>
                              <div class="ms-3">
                                <h5>{{product.name}}</h5>
                                <p class="small mb-0">Total: ${{ product.number * product.price}}</p>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style="width: 50px;">
                                <h5 class="fw-normal mb-0">{{product.number}}</h5>
                              </div>
                              <div style="width: 80px;">
                                <h5 class="mb-0">${{product.price}}</h5>
                              </div>
                              <button class="btn btn-link" style="color: #cecece;" @click="deleteProduct(product.product_id)"><i class="fas fa-trash-alt"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>
      
      
                    </div>
                    <div class="col-lg-5">
      
                      <div class="card bg-primary text-white rounded-3 w-100">
                        <div class="card-body">
                          <div class="d-flex justify-content-between align-items-center mb-4">
                            <h5 class="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                              class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                          </div>
      
                          <p class="small mb-2">Card type</p>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i
                              class="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>
      
                          <form class="mt-4">
                            <!-- <div class="form-outline form-white mb-4">
                              <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label class="form-label" for="typeName">Cardholder's Name</label>
                            </div> -->
      
                            <div class="form-outline form-white mb-4">
                              <input type="text" id="typeText" v-model="this.destination" class="form-control form-control-lg" siez="17"
                                placeholder="***-***-***" minlength="10" maxlength="100" />
                              <label class="form-label" for="typeText">Your location</label>
                            </div>
      
                          </form>
      
                          <hr class="my-4">
      
                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Subtotal</p>
                            <p class="mb-2">${{this.totalCost}}</p>
                          </div>
      
                          <div class="d-flex justify-content-between">
                            <p class="mb-2">Shipping</p>
                            <p class="mb-2">$0.00</p>
                          </div>
      
                          <div class="d-flex justify-content-between mb-4">
                            <p class="mb-2">Total(Incl. taxes)</p>
                            <p class="mb-2">${{this.totalCost}}</p>
                          </div>
      
                          <button type="button" class="btn btn-info btn-block btn-lg">
                            <div @click="submitOrder" class="d-flex justify-content-between">
                              <span>${{this.totalCost}}</span>
                              <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>
      
                        </div>
                      </div>
      
                    </div>
      
                  </div>
      
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
</template>
<script>
import CartService from "@/services/cart.service";
import OrderService from "@/services/order.service";
import { userAccStore } from "@/Store/userStore";

export default {
    components: {
        CartService
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        const AccountStore = userAccStore();
        return {
            message:"",
            cart:{},
            AccountStore,
            totalCost: 0,
            destination:'',
        };
    },
    methods: {
        async getCart(id) {
            try {
                let cost = 0;
                this.cart = await CartService.findByUserId(id);
                console.log(this.cart);
                for(let i=0; i<this.cart.product_list.length ;i++ ){
                    this.totalCost += this.cart.product_list[i].number *  this.cart.product_list[i].price;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async deleteProduct(product_id){
            try {
                await CartService.deleteOneProduct(this.cart._id,{"product_id":product_id});
                await this.getCart(this.cart.account_id)
            } catch (error) {
                console.log(error);
            }
        },

        async submitOrder(){
            try {
                if(this.cart.product_list.length == 0){
                  this.message = "there is no item in your cart!"
                }else{
                  const data = this.cart
                  data.user_id = this.cart.account_id
                  data.destination = this.destination
                  data.total_cost = this.totalCost
                  await OrderService.create(data)
                  await CartService.deleteAddProduct(this.cart.account_id);
                  this.totalCost = 0
                  await this.getCart(this.cart.account_id)
                }
                
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getCart(this.id);
        this.message = "";
    },
};
</script>
<style>
</style>