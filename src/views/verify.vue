<template>
    <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image" src="https://www.w3schools.com/w3images/architect.jpg" 
        style="filter: blur(8px);
        -webkit-filter: blur(8px);"
         alt="Architecture" width="1500" height="800">
        <div class="w3-display-middle w3-margin-top w3-center w3-border w3-border w3-padding-32 w3-round-xlarge">
            <h1 class="w3-xxlarge w3-text-white w3-margin">
                <span class="w3-padding w3-black w3-opacity-min"><b>Verify sucessful</b></span> 
            </h1>
            <br>
            <h1 class="w3-xxlarge w3-text-white w3-margin">
                <span class="w3-padding w3-black w3-opacity-min"><b>Name :</b></span> 
                <span class="w3-hide-small w3-text-light-grey">{{this.result.name}}</span>
            </h1>
            <br>
            <h1 class="w3-xxlarge w3-text-white w3-margin">
                <span class="w3-padding w3-black w3-opacity-min"><b>Email :</b></span> 
                <span class="w3-hide-small w3-text-light-grey">{{this.result.email}}</span>
            </h1>
        </div>
      </header>
      
      <!-- Footer -->
      <footer class="w3-center w3-black w3-padding-16">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">Verify page</a></p>
    </footer>
</template>


<script>
import UserService from "@/services/user.service";
export default {
    components: {
        UserService,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            message: "",
            result: {},
        };
    },
    methods: {
        async verify(id) {
            try {
                this.result = await UserService.verify(id);
                console.log(this.result);
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.verify(this.id);
        this.message = "";
    },
};
</script>
<style>
@import url(https://www.w3schools.com/w3css/4/w3.css);
</style>