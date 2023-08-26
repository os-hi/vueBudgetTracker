import {createRouter, createWebHistory} from "vue-router"
import Homepage from '../pages/Homepage.vue'
import Dashboard from "../pages/Dashboard.vue"
import Budget from '../pages/Budget.vue'

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
                {
                    path: '/budget',
                    name: 'budget',
                    component: Budget
                },
               
            ]

})

export default router