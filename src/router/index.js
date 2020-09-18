import Vue from 'vue'
import VueRouter from 'vue-router'
import Podcasts from '../views/Podcasts'
import AddPodcast from "../views/AddPodcast"

Vue.use(VueRouter)

const routes = [
    {
        path: '/podcasts',
        name: 'Podcasts',
        components: {
            'content': Podcasts
        }
    },
    {
        path: "/add-podcast",
        name: "AddPodcast",
        components: {
            'content': AddPodcast
        }
    },
    {
        path: '*',
        redirect: { name: 'Podcasts' }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
