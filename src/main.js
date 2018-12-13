import Vue from 'vue';
import Fragment from 'vue-fragment'
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import * as VueGL from "vue-gl";

Object.keys(VueGL).forEach(name => {
    Vue.component(name, VueGL[name]);
});

// Vue.use(Fragment.Plugin);
Vue.config.productionTip = false

window.app = new Vue({
  name: "app",
  router,
  i18n,
  Fragment,
  render: h => h(App)
}).$mount('#app')
