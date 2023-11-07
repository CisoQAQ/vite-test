import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import './mock/index'
import naive from 'naive-ui'
import router from '../router'
import '../components/svgComponent/js/svg.js'
import '../components/svgComponent/js/svg.connectable.js'
import '../components/svgComponent/js/svg.draggy.js'
const app = createApp(App);
import axios from 'axios';
import "../src/micro/index"
import  {createPinia} from "pinia"
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
app.config.globalProperties.$axios = axios;
pinia.use(piniaPluginPersistedstate);
app.use(naive).use(router).use(pinia).mount('#app')