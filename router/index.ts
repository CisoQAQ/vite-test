import {createRouter, createWebHistory} from "vue-router";
import test from "../router/modules/test"
import microApps from '../router/modules/microApps'

const layout = () => import('@/layout/layout.vue') // 作业管理


const routes = [
        {
        path: '/layout',
        name:'layout',
        component: layout,
        children: [...microApps,...test]
        },
        {
            path: '/',
            redirect: '/HomeTestA'
        }
    ]
    const router = createRouter({
        // history模式
        history: createWebHistory(import.meta.env.BASE_URL),
        routes
      })
export default router


