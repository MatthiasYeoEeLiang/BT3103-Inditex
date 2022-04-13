import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LogIn from '@/views/LoginPage.vue'
import FilterPage from '@/views/FilterPage'
const routes = [
    {
        path: '/',
        name: 'LandingPage', 
        component: LandingPage
    },

    {
        path: '/loginPage',
        name: 'Login',
        component: LogIn
    },

    {
        path: '/FilterPage',
        name: 'FilterPage',
        component: FilterPage
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router