import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

import constants from './constants';

import directives from './directives';

import Utils from './utils';

Vue.use(constants);

Vue.use(Element);

Vue.use(directives);

Vue.use(Utils);

Vue.$utils.platform();

Vue.config.productionTip = false;
let a = 1
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
