import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/p1',
        name: 'page1',
        component: () =>
            import ('../components/Page1')
    },
    {
        path: '/p2',
        name: 'page2',
        component: () =>
            import ('../components/Page2')
    }
]

const router = new VueRouter({
    routes
})

export default router