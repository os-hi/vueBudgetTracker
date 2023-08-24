import {createRouter, createWebHistory} from "vue-router"
import Homepage from '../pages/Homepage.vue'
import Dashboard from "../pages/Dashboard.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
                {
                    path: '/',
                    name: 'home',
                    component: Homepage
                },
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard
                },
               
            ]

})

export default router