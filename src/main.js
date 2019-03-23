import Vue from 'vue'
import Movable from './components/Movable.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Movable)
}).$mount('#app')
