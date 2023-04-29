<template>
    <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">
      
              <div class="px-5 ms-xl-4">
                <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
                <span class="h1 fw-bold mb-0">Logo</span>
              </div>
      
              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
      
                  <Form style="width: 23rem;" :validation-schema="validateFormSchema">
        
                    <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>
            
                    <div class="form-outline mb-2">
                        <Field name="email" type="email"  class="form-control form-control-lg" v-model="this.user.email" placeholder="email" />
                        <ErrorMessage name="email" class="error-feedback" />
                        <label class="form-label" for="email">Email</label>
                    </div>
            
                    <div class="form-outline mb-2">
                        <Field name="password" type="password"  class="form-control form-control-lg" v-model="this.user.password" placeholder="*****" />
                        <ErrorMessage name="password" class="error-feedback" />
                        <label class="form-label" for="password">Password</label>
                    </div>
            
                    <div class="pt-1 mb-2">
                        <button class="btn btn-info btn-lg btn-block" type="button" @click="login(this.user)">Login</button>
                    </div>

                    <div class="pt-1 mb-2">
                      <p class="text-danger">{{ this.message }}</p>
                    </div>
                    <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                    
                    <p>Don't have an account? 
                      
                      <router-link
                        :to="{
                            name: 'register',
                        }"
                        >
                        <a href="#!" class="link-info">Register here</a>
                        </router-link>
                    </p>
                    
                </Form>
                
              </div>
      
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;">
            </div>
          </div>
        </div>
      </section>
</template>


<script>
import { userAccStore } from "@/Store/userStore";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import UserService from "@/services/user.service";
export default {
    components: {
        UserService,
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const userStore = userAccStore()
        const validateFormSchema = yup.object().shape({
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            
            password: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(6, "Tên phải có ít nhất 6 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
        })
        return {
          user: {
            email:"",
            password:"",
          },
          message: "",
          userStore,
          result: {},
          validateFormSchema,
        };
    },
    methods: {
      async login(data) {
          try {
              console.log(data);
              this.result = await UserService.login(data);
              this.message = this.result.message;
              if(this.result.mail_verify == false){
                this.message = "your account was locked";
              }
              else {
                this.userStore.user = this.result.user;
                this.userStore.user.token = this.result.AccessToken;
                // localStorage.setItem('user', this.userStore.user );
                localStorage.user = this.userStore.user;
                if(this.result){
                  console.log(this.result)
                  if(this.result.user.role == 1){
                    this.$router.push({
                      name: "admin.order",
                    });
                  } else {
                    this.$router.push({
                      name: "user",
                    });
                  }
                }else{
                  this.message = "login fail.";
                }
              }
              
          } catch (error) {
              console.log(error);
          }
      }
    },
};
</script>
<style>
.error-feedback{
  color: red;
}

.bg-image-vertical {
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: right center;
    background-size: auto 100%;
}

@media (min-width: 1025px) {
    .h-custom-2 {
        height: 100%;
    }
}
</style>