<template>
    <div class="container containerA1 py-4 my-4 mx-auto d-flex flex-column">
        <div class="header">
            <div class="row r1">
                <div class="col-md-9 abc">
                    <h1 class="text-dark" style="margin-left:-200px;">{{this.product.name}}</h1>
                </div>
                <div class="col-md-3 text-right pqr"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                <h5 class="text-right para">Based on 250 Review</h5>
            </div>
        </div>
        <div class="container-body mt-4">
            <div class="row">
                <div class="col-md-5 p-0 klo">
                    <ul>
                        <li>100% Quality</li>
                        <li>Free Shipping</li>
                        <li>Easy Returns</li>
                        <li>12 Months Warranty</li>
                        <li>EMI Starting from (On Credit Cards)</li>
                        <li>Normal Delivery : 4-5 Days</li>
                        <li>Express Delivery : 2-3 Days</li>
                        <li>COD Available (All Over India)</li>
                        <li>price: ${{this.product.price}}</li>
                        <li>Create At: {{this.product.manufacture}}</li>
                        <li>Available: {{this.product.available}}</li>
                    </ul>
                </div>
                <div class="col-md-7"> <img class="" style="position:absolute; right: 150px;" :src="'http://localhost:3000/images/'+this.product.image" width="400" height="400"> </div>
            </div>
        </div>
        <div class="footer d-flex flex-column mt-5">
            <div class="row r4">
                <div class="col-md-2 myt des">
                    <a href="#">Description</a>
                    <h6>{{this.product.description}}</h6>

                </div>
                <div class="col-md-2 myt "><a href="#">Review</a></div>
                <div class="col-md-2 mio offset-md-4">
                    <!-- <button type="button" class="btn btn-outline-warning" @click="submitAddToCart"><a href="#">ADD TO CART</a></button> -->
                    <div class="form-outline border border-info" style="">
                        <input min="1" :max="this.product.quantity" style="border-radius: 10px;" type="number" id="typeNumber" v-model="this.number" class="form-control" />
                        <label class="form-label" for="typeNumber">Maximum {{this.product.quantity}}</label>
                    </div>
                    <div v-if="this.message !=''" class="note note-success mb-3 ">
                        <strong>Note :</strong> <h6>{{this.message}}</h6> 
                    </div>
                </div>
                <div class="col-md-2 mt-2 myt "><button type="button" class="btn btn-outline-warning"  @click="submitAddToCart"><a href="#">BUY NOW</a></button></div>
                <div class="col-8"></div>
                <div class="col-4">
                </div>
            </div>
        </div>
    </div>
        <Gallery style="left:50px;position: relative; height:650px;" ></Gallery>

</template>
<script>
import ProductService from "@/services/product.service";
import cartService from "@/services/cart.service";
import { userAccStore } from "@/Store/userStore";
import Gallery from "./gallery.vue"
export default {
    components: {
        ProductService,
        cartService,
        Gallery,
    },
    props: {
        id: { type: String, required: true },
    },
    watch: {
        'id' : function(v){
            this.id = v;
            console.log(this.id);
            // getProduct(this.id);
        }
    },
    data() {
        const AccountStore = userAccStore();
        return {
            number: 1,
            product: {},
            products:[],
            activeIndex: 0,
            message: "",
            AccountStore,
        };
    },
    computed: {
        id(){
            return this.$store.state.route.params.id;
        },
        product(){
            return this.$store.getters.getProduct(this.id);
        }
    },
    methods: {
        async getProduct(id) {
            try {
                this.product = await ProductService.get(id);
            } catch (error) {
                console.log(error);
            }
        },
        async submitAddToCart(){
            const data = {
                "account_id": this.AccountStore.user._id,
                "product_list":[
                    {
                        "product_id": this.product._id,
                        "name": this.product.name,
                        "number": this.number,
                        "image": this.product.image,
                        "price":this.product.price
                    }
                ]
            }
            console.log(data)
            try {
                await cartService.create(data);
                this.message = "your cart was updated!!!"
                // router.push({ name: 'user.cart', params: { id: this.AccountStore.user._id  } })
            } catch (error) {
                console.log(error);
            }
        }
    },
    created() {
        this.getProduct(this.id);
        this.message = "";
    },
};
</script>
<style>
@import '@/assets/product_detail.css';
</style>