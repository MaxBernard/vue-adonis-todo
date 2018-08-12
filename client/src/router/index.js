import Vue from 'vue';
import Router from 'vue-router';
import Projects from '../views/Projects';
import Login from '../views/Login';
import Register from '../views/Register';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
