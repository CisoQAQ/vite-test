import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './mock/index'
import naive from 'naive-ui'
import router from '../router'
const app = createApp(App);
import axios from 'axios'
app.config.globalProperties.$axios = axios;
app.use(naive).use(router).mount('#app')
