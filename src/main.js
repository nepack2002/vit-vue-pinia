import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from '../router.js';
import { createPinia } from 'pinia'; // Import thư viện Pinia

const app = createApp(App);
app.use(router);

// Sử dụng Pinia
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
