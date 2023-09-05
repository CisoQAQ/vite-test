import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './mock/index'
const app = createApp(App);
import axios from 'axios'
app.config.globalProperties.$axios = axios;
app.mount('#app')
