import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import "@/styles/index.scss";
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
// 如果需要使用 animate.css
import 'animate.css';
const app = createApp(App);

app.use(BootstrapVue3);
app.use(createPinia());
app.use(router);

app.mount('#app');
