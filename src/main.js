import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

Vue.config.productionTip = false

Vue.directive('movable', {
  bind: function (el, binding, vnode) {
    el.addEventListener('mouseleave', function () {
      vnode.context.$emit('test')
    })
  }
})

new Vue({
  render: h => h(HelloWorld)
}).$mount('#app')
