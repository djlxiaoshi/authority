import Vue from 'vue';
import Router from 'vue-router';
import Apply from 'components/Apply';
import MyAuth from 'components/MyAuth';
import Approval from 'components/Approval';
import Manage from 'components/Manage';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/myauth',
      name: 'MyAuth',
      component: MyAuth
    },
    {
      path: '/approval',
      name: 'Approval',
      component: Approval
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ],
  linkActiveClass: 'active'
});
