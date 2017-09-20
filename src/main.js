// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import util from './util'
import axios from 'axios'
// axios.defaults.withCredentials=true;
// axios.defaults.baseURL='https://flpp.shanshizhe.cn';
Vue.prototype.$http = axios;

Vue.use(util);

// Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
