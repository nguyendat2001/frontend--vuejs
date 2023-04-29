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
                        <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Signup</h3>
                
                        <div class="form-outline mb-2">
                            <!-- <input name="name" type="text" class="form-control form-control-lg" v-model="this.userLocal.name" placeholder=" user name"> -->
                            <Field name="name" type="text"  class="form-control form-control-lg" v-model="this.userLocal.name" placeholder=" user name" />
                            <ErrorMessage name="name" class="error-feedback" />
                            <!-- <ErrorMessage name="name" class="error-feedback" /> -->
                            <label class="form-label" for="name">Username</label>
                        </div>
                
                        <div class="form-outline mb-2">
                            <!-- <input name="email" type="email" class="form-control form-control-lg"  v-model="this.userLocal.email"  placeholder=" email"> -->
                            <Field name="email" type="email"  class="form-control form-control-lg" v-model="this.userLocal.email" placeholder="email" />
                            <ErrorMessage name="email" class="error-feedback" />
                            <label class="form-label" for="email">Email</label>
                        </div>
                
                        <div class="form-outline mb-2">                            
                            <Field name="phone" type="tel"  class="form-control form-control-lg" v-model="this.userLocal.phone" placeholder="phone number" />
                            <ErrorMessage name="phone" class="error-feedback" />
                            <label class="form-label" for="phone">Phone</label>
                        </div>
                
                        <div class="form-outline mb-2">
                            <Field name="address" type="text"  class="form-control form-control-lg" v-model="this.userLocal.address" placeholder="your address" />
                            <ErrorMessage name="address" class="error-feedback" />
                            <label class="form-label" for="address">Address</label>
                        </div>
                
                        <div class="form-outline mb-2">
                            <Field name="password" type="password"  class="form-control form-control-lg" v-model="this.userLocal.password" placeholder="*****" />
                            <ErrorMessage name="password" class="error-feedback" />
                            <label class="form-label" for="password">Password</label>
                        </div>
                        <div class="form-outline mb-2">
                            <p>{{this.message}}</p>
                        </div>
                        <div class="pt-1 mb-2">
                            <button class="btn btn-info btn-lg btn-block" type="button" @click="createUser(this.userLocal)">Register</button>
                        </div>
                        <p>Login in here! 
                      
                            <router-link
                              :to="{
                                  name: 'login',
                              }"
                              >
                              <a href="#!" class="link-info">Lick Me</a>
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
        const validateFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải có ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            email: yup
                .string()
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
            phone: yup
                .string()
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ"
                ),
            password: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(6, "Tên phải có ít nhất 6 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
        });
        return {
            userLocal: {
                name:"",
                email: "",
                password: "",
                address:"",
                phone:"",
            },
            validateFormSchema,
            result: {},
        };
    },
    methods: {
        async createUser(data) {
            try {
                console.log(data);
                await UserService.create(data);
                this.message = "User account được Tao thành công.";
                console.log(this.message);
                this.$router.push({
                    name: "login",
                });
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