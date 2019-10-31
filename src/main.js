import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import mask from 'vue-the-mask';

Vue.config.productionTip = false
Vue.use(mask);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
