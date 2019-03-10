import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import echarts from 'echarts'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
import 'css/reset.css'
import 'css/table.css'
import 'css/elementUI.css'
import './utils/Axios'
import './router/permission'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

let vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
Vue.use({vm})
