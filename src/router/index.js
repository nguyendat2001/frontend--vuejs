import { createWebHistory, createRouter } from "vue-router";
import { userAccStore } from "@/Store/userStore";

const routes = [
    
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginUser.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/RegisterUser.vue"),
    },
    {
        path: "/Verify/:id",
        name: "vevify",
        component: () => import("@/views/verify.vue"),
        props: true
    },
    
    {
        path: "/",
        component: () => import("@/views/home/home.vue"),
        children: [
            {
                path: "/user/cart/:id",
                name: "user.cart",
                component: () => import("@/views/pages/cart.vue"),
                props: true
            },
            {
                path: "/user/order",
                name: "user.order",
                component: () => import("@/views/pages/order.vue"),
            },
            {
                path: "/user/order/:id",
                name: "user.order.detail",
                component: () => import("@/views/pages/orderDetail.vue"),
                props: true
            },
            {
                path: "/user/",
                name: "user",
                component: () => import("@/views/pages/main.vue"),
            },
            {
                path: "/user/products",
                name: "user.products",
                component: () => import("@/views/pages/product.vue"),
            },
            {
                path: "/user/products/:id",
                name: "user.product.detail",
                component: () => import("@/views/pages/productDetail.vue"),
                props: true
            },
        ],
    },

    {
        path: "/admin",
        component: () => import("@/views/Admin/admin.vue"),
        children: [
            {
                path: "/admin/general",
                name: "admin.general",
                component: () => import("@/views/Admin/components/general.vue"),
            },
            {
                path: "/admin/order",
                name: "admin.order",
                component: () => import("@/views/Admin/components/order.vue"),
            },
            {
                path: "/admin/product",
                name: "admin.product",
                component: () => import("@/views/Admin/components/product.vue"),
            },
            {
                path: "/admin/product/:id",
                name: "admin.product.edit",
                component: () => import("@/views/Admin/components/editProduct.vue"),
                props: true
            },
            {
                path: "/admin/user",
                name: "admin.user",
                component: () => import("@/views/Admin/components/user.vue"),
            },
        ],
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
      const userStore = userAccStore();
      let value = localStorage.user;
      if (!userStore.user && to.name != "login" && to.name != "register") {
        next({
          path: "/login",
          replace: true,
        });
      }
      next();
  });

export default router;