import Vue from 'vue'
import App from './App.vue'
import router from './router' //added for air quality link
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios

new Vue({
  //begin added for linking air quality stuff
  router,
  //end
  render: h => h(App),
}).$mount('#app')
