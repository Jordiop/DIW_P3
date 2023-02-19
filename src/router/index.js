import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        name: 'home',
        component: () =>
            import ('../views/HomeView.vue')
    }, {
        path: '/pc',
        name: 'pc',
        component: () =>
            import ('../views/PCView.vue'),
    }, {
        path: '/pc/:id',
        name: 'SinglePC',
        component: () =>
            import ('../views/SinglePC.vue'),
        props: true
    }, {
        path: '/peripherals',
        name: 'peripheral',
        component: () =>
            import ('../views/KeyboardView.vue'),
    }, {
        path: '/carrito',
        name: 'carrito',
        component: () =>
            import ('../views/CarritoView.vue'),
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/LoginView.vue'),
    }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/AboutView.vue')
    }]
})

export default router