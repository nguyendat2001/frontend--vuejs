<template>
  <div class="p-5 text-center bg-light bg-img" style="">
  </div>
  <!-- <div class="bg-text p-3" style="top:300px;left:300px; height:200px;"></div> -->
  <div class="bg-text p-3">
      <div class="" style="background-image: url('');">
          <h2 style="text-align: center; top:315px; position: absolute;" >You can see every thing you want to find.</h2>
          <!-- <h1 style="text-align: center;">I am John Doe</h1>
          <p style="text-align: center;" >And I'm a Photographer</p> -->
      </div>    
      <img class="" height="300" width="500" style="left:-67px; position: relative; border: 1px solid #ddd;
      border-radius: 4px;
      padding: 5px; " src="https://www.runtastic.com/blog/wp-content/uploads/2021/05/thumbnail_1200x800-2.jpg">

  </div>

  <div class="wrap">
      <div class="search">
         <input type="text" class="searchTerm" placeholder="What are you looking for?">
         <button type="submit" class="searchButton">
           <i class="fa fa-search"></i>
        </button>
      </div>
  </div>


  
  <!-- Header with full-height image -->
  <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
    <div class="w3-display-left w3-text-white" style="padding:48px">
      <!-- <span class="w3-jumbo w3-hide-small">Start something that matters</span><br> -->
      <!-- <span class="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br> -->
      <!-- <span class="w3-large">Stop wasting valuable time with projects that just isn't you.</span> -->
      <br><br><br><br><br><br><br><br><br><br><br><br>
      <p>
        <router-link
        :to="{
            name: 'user.products',
        }"
        >
        <a  class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">See more</a>
        </router-link>
      </p>
    </div> 
    <div class="w3-display-bottomleft w3-text-grey w3-large" style="padding:24px 48px">
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
  </header>
  
  <!-- About Section -->
  <div class="w3-container" style="padding:128px 16px" id="about">
    <h3 class="w3-center">ABOUT THE COMPANY</h3>
    <p class="w3-center w3-large">Key features of our company</p>
    <div class="w3-row-padding w3-center" style="margin-top:64px">
      <div class="w3-quarter">
        <i class="fa fa-desktop w3-margin-bottom w3-jumbo w3-center"></i>
        <p class="w3-large">Responsive</p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> -->
      </div>
      <div class="w3-quarter">
        <i class="fa fa-heart w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Passion</p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> -->
      </div>
      <div class="w3-quarter">
        <i class="fa fa-diamond w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Design</p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> -->
      </div>
      <div class="w3-quarter">
        <i class="fa fa-cog w3-margin-bottom w3-jumbo"></i>
        <p class="w3-large">Support</p>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> -->
      </div>
    </div>
  </div>
  
  <div class="container-fluid justify-content-center" style="height:430px; background-color:white; left: 100px;">
    
    <div class="container row " style="margin-left: 150px;" >

      <div class="row mt-5 shadow-5 p-4">
        <div class="col-4">
          <div class="row">
            <div class="col-2" style="height: 40px;">
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Skor_fr%C3%A5n_1700-_till_1960-talet_-_Nordiska_Museet_-_NMA.0056302.jpg/413px-Skor_fr%C3%A5n_1700-_till_1960-talet_-_Nordiska_Museet_-_NMA.0056302.jpg"
              alt=""
              style="width: 30px; height: 30px"
              class="rounded img-thumbnail"/>
            </div>
            <div class="col-10 p-3">
              <h6>Shoes</h6>
              
            </div>
            <hr>

            <div class="col-2" style="height: 40px;">
              <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 30px; height: 30px"
              class="rounded img-thumbnail"/>
            </div>
            <div class="col-10 p-3">
              <h6>T-shirt</h6>
              
            </div>
            <hr>

            <div class="col-2 " style="height: 40px;">
              <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Trousers-colourisolated.jpg/255px-Trousers-colourisolated.jpg"
              alt=""
              style="width: 30px; height: 30px"
              class="rounded img-thumbnail"/>
            </div>
            <div class="col-10 p-3">
              <h6>Pant</h6>
              
            </div>
            <hr>

            <div class="col-2" style="height: 40px;">
              <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 30px; height: 30px"
              class="rounded img-thumbnail"/>
            </div>
            <div class="col-10 p-3">
              <h6>All Catalogy</h6>
              
            </div>
            <hr>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-7">
          <img class="" height="330" width="700" style="left:-67px; position: relative; border: 1px solid #ddd;
          border-radius: 4px;
          padding: 5px; " src="https://brand.assets.adidas.com/f_auto,q_auto,fl_lossy/capi/enUS/Images/how-to-clean-running-shoes-1600x533_221-339656.jpg">
        </div>
      </div>
    </div>
    
  </div>
    
  <div class="container" style="width: 1000px;">
    <div class="row p-5">
      
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

    methods: {
        async getAllProducts(){
            try {
                // this.products = await ProductService.getAllAvailable();
                const data = await ProductService.getAllAvailable();
                for(let i=0; i< 8;i++)
                    this.products.push(data[i]);
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

<style >
@import '@/assets/product_list.css';
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
@import url(https://www.w3schools.com/w3css/4/w3.css);
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

body,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", sans-serif}

body{
  height: 100%;
  line-height: 1.8;
}

.bgimg-1 {
  background-position: center;
  background-size: cover;
  background-image: url("/w3images/mac.jpg");
  min-height: 100%;
}

.w3-bar .w3-button {
  padding: 16px;
}

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width: 100%;
  position: relative;
  display: flex;
}

.searchTerm {
    width: 100%;
    border: 3px solid #9DBFAF;
    border-right: none;
    padding: 5px;
    height: 36px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;
}

.searchTerm:focus{
  color: #5a5c5c;
}

.searchButton {
  width: 40px;
  height: 36px;
  border: 1px solid #9DBFAF;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
    z-index:4;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
}

.bg-img{
    background-image: url('/background.jpg'); 
    height:500px;
    filter: blur(8px);
   -webkit-filter: blur(8px);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
}

.bg-text {
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute; 
    top: 45%;
    left: 30%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 400px;
    height: 400px;
    padding: 30px;
    text-align: center;
    border-radius: 25px;
}



</style>
