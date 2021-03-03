import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/home.vue'
import Cart from '../views/cart/cart.vue'
import Profile from '../views/profile/mine.vue'
import Item from '../views/category/item.vue'

const routes = [{
        path: '',
        redirect: 'Home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/item',
        component: Item
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router