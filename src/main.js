import { createApp } from 'vue'
import App from './App.vue'


// import "bootstrap/dist/css/bootstrap.min.css"
import 'mdb-vue-ui-kit/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css"
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from "./router";
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(app);
app.use(router);
app.use(pinia);
app.mount("#app");
