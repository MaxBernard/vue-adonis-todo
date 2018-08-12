// 'use strict'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
// import Panel from './components/Panel';
import store from './store/index';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
