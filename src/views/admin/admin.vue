<template>
<div class="w3-light-grey">
    <Navbar></Navbar>
    <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

    <div class="w3-main" style="margin-left:310px;margin-top:43px;">
            <router-view v-slot="{ Component }">
                <transition name="fade" >
                    <component :is="Component" />
                </transition>
            </router-view>    
        </div>
    </div>
  <!--Main layout-->
    
  <!--Main layout-->
</template>
<script>
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

import Navbar from "./components/navbar.vue";
export default {
    components: {
        Navbar,
    },
    data() {
        return {
        };
    },
    watch: {
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted() {
    },
};
</script>
<style>
@import url(https://www.w3schools.com/w3css/4/w3.css);
@import url(https://fonts.googleapis.com/css?family=Raleway);
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease-out;
}
</style>