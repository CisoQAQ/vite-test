import Vue from 'vue'
import {createRouter, createMemoryHistory} from "vue-router";
import  Test from  '../src/views/test/index.vue'
const routes =[
    {
        path:'/',
        name:'test',
        component:Test
    }
]
const router = createRouter({
    history:createMemoryHistory(),
    routes
})
export default router