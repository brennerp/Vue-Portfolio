import Vue from 'vue'
import App from '@/App.vue'
import blipCards from 'blip-cards'
import '@/assets'
import '@/moment-locale.js'

Vue.use(blipCards)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
