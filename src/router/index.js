import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },

        {
            path: '/info',
            name: 'info',
            component: () => import('../views/InfoView.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../views/CalendarView.vue'),
        },
        {
            path: '/inspections',
            name: 'inspections',
            component: () => import('../views/InspectionsView.vue'),
        },
        {
            path: '/maintenance',
            name: 'maintenance',
            component: () => import('../views/MaintenanceView.vue'),
        },

        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue'),
        // },
    ],
})

export default router
