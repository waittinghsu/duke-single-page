import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'; // 全局导入 Bootstrap 样式
import 'bootstrap';

// 如果需要使用 animate.css
import 'animate.css';
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
