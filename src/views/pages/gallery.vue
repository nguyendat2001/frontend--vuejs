<template>
    <div class="container row m-5 bg-light d-flex justify-content-center" >
        <h3 class="mt-3">Another Product </h3>
        <hr>
        <div v-for="(product,index) in this.products"
            :key="product._id" class="col-md-3 col-sm-6 mt-5" >
                    <div class="card">
                        
                            <div class="image-container hover-overlay hover-zoom hover-shadow ripple">

                                <div class="first">
                                
                                <div class="d-flex justify-content-between align-items-center">

                                <span class="discount">-25%</span>
                                <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                                    </div>
                                </div>
                                <router-link
                                    :to="{
                                        name: 'user.product.detail',
                                        params: { id: product._id },
                                    }"
                                    >
                                    <img width="250" height="350" :src="'http://localhost:3000/images/'+product.image" class="img-fluid rounded thumbnail-image imageSize">
                                    </router-link>
                                </div>

                            <div class="product-detail-container p-2">

                                <div class="d-flex justify-content-between align-items-center">

                                    <h5 class="dress-name">{{product.name}}</h5>

                                    <div class="d-flex flex-column mb-2">

                                    <span class="new-price">${{product.price}}</span>
                                    <small class="old-price text-right">${{product.price}}</small>
                                    </div>

                                </div>


                                <div class="d-flex justify-content-between align-items-center pt-1">

                                    <div class="color-select d-flex ">

                                    <input type="button" name="grey" class="btn_3 creme">
                                    
                                    <input type="button" name="darkblue" class="btn_3 darkblue ml-2">

                                    </div>

                                    <div class="d-flex ">
                                    
                                    <span class="item-size mr-2 btn_3" type="button">S</span>
                                    <span class="item-size mr-2 btn_3" type="button">M</span>
                                    <span class="item-size btn_3" type="button">L</span>

                                    </div>
                                </div>
                                <div class="d-flex justify-content-between align-items-center pt-1">
                                    <div>
                                    <i class="fa fa-star-o rating-star"></i>
                                    <span class="rating-number">4.8</span>
                                    </div>
                                    <span class="buy">BUY +</span>
                                </div>
                            </div>
                       
                    </div>

                    <div class="mt-3">
                    <div class="card voutchers">

                        <div class="voutcher-divider">

                        <div class="voutcher-left text-center">
                            <span class="voutcher-name">Payday Surprise</span>
                            <h5 class="voutcher-code">#SRPSPYDY</h5>
                            
                        </div>
                        <div class="voutcher-right text-center border-left">
                            <h5 class="discount-percent">20%</h5>
                            <span class="off">Off</span>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>


    </div>
</template>
<script>
import ProductService from "@/services/product.service";
export default {
    components: {
        ProductService,
    },
    data() {
        return {
            products:[],
            activeIndex: -1,
        };
    },
    watch: {
    },
    computed: {
        
    },
    methods: {
        async getAllProducts(){
            try {
                const data = await ProductService.getAllAvailable();
                for(let i=0; i< 4;i++)
                    this.products.push(data[i]);
                
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.getAllProducts();
            this.activeIndex = -1;
        },
    },
    mounted() {
        this.refreshList();
    },
};
</script>
<style>
@import '@/assets/product_list.css';
</style>