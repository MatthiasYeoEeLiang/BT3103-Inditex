import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import LogIn from '@/views/LoginPage.vue'
import FilterPage from '@/views/FilterPage'
import Profile from '@/views/Profile.vue'
import InfoPage from '@/views/InfoPage.vue'
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
    },

    {
        path: "/profile",
        name: "Profile",
        component: Profile
    },
    {
        path: "/infopage",
        name: "InfoPage",
        component: InfoPage
    }
]

const router = createRouter({
    history: createWebHistory(), 
    routes
})

export default router