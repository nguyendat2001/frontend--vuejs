<template>
    <div class="header">
      <!-- Navbar -->
      <nav class=" pt-3 navbar navbar-expand-lg navbar-dark bg-dark">
        <!-- Container wrapper -->
        <div class="container">
          <!-- Navbar brand -->
          <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style="margin-top: -1px;"
            />
          </a>

          <!-- Toggle button -->
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <!-- Collapsible wrapper -->
          <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
            </ul>
            <!-- Left links -->

            <div class="d-flex align-items-center">
              <button type="button" class="btn btn-link px-3 me-2" >
                Login
              </button>
              <button type="button" class="btn btn-primary me-3" @click="logout">
                Logout
              </button>
              <a
                class="btn btn-dark px-3"
                href=""
                role="button"
                ><i class="fab fa-github"></i
              ></a>
            </div>
          </div>
          <!-- Collapsible wrapper -->
        </div>
        <!-- Container wrapper -->
      </nav>
      <!-- Navbar -->
    </div>
    <transition name="fade" class="shadow-2-strong" style="z-index:5;">
      <div id="navbar" class="sticky shadow-2-strong" v-if="showNavbar">
        <router-link
        :to="{
            name: 'user',
        }"
        >
          <a class="active" href="">Home</a>
        </router-link>
        <router-link
        :to="{
            name: 'user.products',
        }"
        >
          <a href="">Products</a>
        </router-link>
        <router-link
        :to="{
            name: 'user.cart',
            params: { id: this.AccountStore.user._id },
        }"
        >
          <a href="">Cart</a>
        </router-link>
        <router-link
        :to="{
            name: 'user.order',
        }"
        >
          <a href="">Order</a>
        </router-link>
      </div>
    </transition >
</template>
<script>
import { userAccStore } from "@/Store/userStore";
import UserService from "@/services/user.service";

export default {
  components: {
    UserService
  },
  data() {
    const AccountStore = userAccStore();
    return {
        showNavbar:false,
        AccountStore
      }
    },
  methods:{
   handleScroll (event) {
      window.pageYOffset>0?this.showNavbar=true:this.showNavbar=false;
    },
    async logout(){
        try {
            this.AccountStore.logout;
        } catch (error) {
            console.log(error);
        }
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  background-color: #fbfbfb;
  padding: 0px;
  height: 100px;
  text-align: center;
}

#navbar {
  padding: 4px; 
  overflow: hidden;
  color:black;
  background-color: #ffffff;
  height: 60px;
}

#navbar a {
  float: left;
  display: block;
  color: #000000;
  text-align: center;
  padding: 5px 16px;
  text-decoration: none;
  font-size: 17px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}

#navbar a.active {
  background-color: #4CAF50;
  color: rgb(0, 0, 0);
}

.content {
  padding: 16px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 60px;
}
.fade-enter-active
 {
  transition: all 1s;
}
.fade-leave-active {
  transition: all 2s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;

}
</style>