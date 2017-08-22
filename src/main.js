// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import routes from './routes'
import 'materialize-css/dist/css/materialize.min.css'
import "vue-wysiwyg/dist/vueWysiwyg.css";
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
