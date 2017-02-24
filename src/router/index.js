import Vue from 'vue';
import Router from 'vue-router';
import Application from 'components/Application/Application';
import MyAuto from 'components/MyAuto/MyAuto';
import Approval from 'components/Approval/Approval';
import Management from 'components/Management/Management';

import SelectGame from 'components/SelectGame/SelectGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Application',
      component: Application,
      children: [{
        path: '/game',
        component: SelectGame
      }]
    },
    {
      path: '/myauto',
      name: 'MyAuto',
      component: MyAuto
    },
    {
      path: '/approval',
      name: 'Approval',
      component: Approval
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
    }
  ]
});
