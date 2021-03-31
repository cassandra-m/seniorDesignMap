import Vue from 'vue'
import VueRouter from 'vue-router'
import AirQuality from '../views/AirQuality.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/airquality',
    name: 'AirQuality',
    component: AirQuality
}
]

const router = new VueRouter({
    routes
})

export default router