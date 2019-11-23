// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueResource from 'vue-resource';
import http from './http'
import 'jquery'

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.use(ElementUI);
// Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

