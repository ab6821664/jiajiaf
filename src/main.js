import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
Vue.prototype.axios=axios;
Vue.use(elementUi);
Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
