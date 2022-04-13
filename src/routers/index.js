import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LogIn from '@/views/LoginPage.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router