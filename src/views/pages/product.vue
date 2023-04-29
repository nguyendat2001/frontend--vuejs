<template>
<!-- <div class="container-fluid d-flex justify-content-center p-5 align-content-center bg-info" style="height:300px;">
    <h3>Our Product</h3>
</div> -->
<div class="container row d-flex justify-content-center" style="margin-left:50px;">
    <div class="col-4 p-4 mt-5 ">
        <dl class=" rounded">
            <dt class="mb-3" style="width: 80%;"> 
                <div class="input-group" style="">
                    <input type="search" style="" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  
                    v-model="searchText" 
                    @input="updateModelValue" 
                    @keyup.enter="submitsearch"/>
                    <button type="button" @click="submitsearch" style="border-radius:0px 20px 20px 0px;" class="btn btn-outline-info">search</button>
                </div>
            </dt>
        </dl>
        
        <dl class=" p-4 border border-1 rounded">
            <dt class="mb-3"> <h5><b>Categories</b></h5></dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Shoes</a></h6>
                <h6 class="text-secondary col-4 fst-normal">80</h6>
            </dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >T-shirt</a></h6>
                <h6 class="text-secondary col-4 fst-normal">40</h6>
            </dt >
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Hat</a></h6>
                <h6 class="text-secondary col-4 fst-normal">73</h6>
            </dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Gloves</a></h6>
                <h6 class="text-secondary col-4 fst-normal">80</h6>
            </dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Pant</a></h6>
                <h6 class="text-secondary col-4 fst-normal">90</h6>
            </dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Sneaker</a></h6>
                <h6 class="text-secondary col-4 fst-normal">30</h6>
            </dt>
            <dt class="row d-flex justify-content-between"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >All Categories</a></h6>
                <h6 class="text-secondary col-4 fst-normal">424</h6>
            </dt>
        </dl>

        <dl class=" p-4 border border-1 rounded">
            <dt class="mb-3"> <h5><b>Make In</b></h5></dt>
            
            <dt class="row d-flex justify-content-between" @click="findByPlace('china')"> 
                <h6 class="text-secondary col-8"><a href="#"  class="text-secondary fst-normal" >china</a></h6>
                <h6 class="text-secondary col-4 fst-normal">73</h6>
            </dt>
            <dt class="row d-flex justify-content-between" @click="findByPlace('Viet Nam')"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >Viet Nam</a></h6>
                <h6 class="text-secondary col-4 fst-normal">80</h6>
            </dt>
            <dt class="row d-flex justify-content-between" @click="findByPlace('usa')"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >USA</a></h6>
                <h6 class="text-secondary col-4 fst-normal">90</h6>
            </dt>
            <dt class="row d-flex justify-content-between" @click="getAllProducts()"> 
                <h6 class="text-secondary col-8"><a href="#" class="text-secondary fst-normal" >All Country</a></h6>
                <h6 class="text-secondary col-4 fst-normal">30</h6>
            </dt>
        </dl>
    </div>
    
    <div class="col-8 row bg-light">
            <div v-for="(product,index) in this.filteredproducts"
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
                this.products = await ProductService.getAllAvailable();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.getAllProducts();
            this.activeIndex = -1;
        },

        async findByPlace(data){
            try {
                this.products = await ProductService.findByPlace(data);
            } catch (error) {
                console.log(error);
            }
        },

        async findByBrand(data){
            try {
                this.products = await ProductService.findByBrand(data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.refreshList();
    },
};

</script>
<style>
@import '@/assets/product_list.css';
</style>