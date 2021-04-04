import Vue from 'vue'
import VueRouter from 'vue-router'
import AirQualitySearch from '../views/AirQualitySearch.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AirQuality from '../views/AirQuality.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/airQualitySearch',
    name: 'AirQualitySearch',
    component: AirQualitySearch
},
{
    path: '/about',
    name: 'About',
    component: About
},
{
    path: '/airQuality',
    name: 'AirQuality',
    component: AirQuality
}
]

const router = new VueRouter({
    routes
})

export default router