// 'use strict'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
// import Panel from './components/Panel';
import App from './App';
import store from './store';
import router from './router';
// import '../vue.config';

Vue.config.productionTip = false;

Vue.use(Vuetify);
sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
