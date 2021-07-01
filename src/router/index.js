import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: () =>
            import ('../components/Whatsapp/main')
    },
    {
        path: '/p1',
        name: 'page1',
        component: () =>
            import ('../components/Practice/Page1')
    },
    {
        path: '/p2',
        name: 'page2',
        component: () =>
            import ('../components/Practice/Page2')
    }
]

const router = new VueRouter({
    routes
})

export default router