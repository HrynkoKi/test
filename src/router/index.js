import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Comments from '@/views/Comments'
import Comment from '@/views/Comment'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/comment',
        name: 'Comment',
        component: Comment
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            }
        }
    }
})

export default router
