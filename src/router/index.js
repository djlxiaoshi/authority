import Vue from 'vue';
import Router from 'vue-router';
import Application from 'components/Application/Application';
import MyAuto from 'components/MyAuto/MyAuto';
import Approval from 'components/Approval/Approval';
import Management from 'components/Management/Management';

import SelectGame from 'components/SelectGame/SelectGame';
import SelectPlatform from 'components/SelectPlatform/SelectPlatform';
import SelectHall from 'components/SelectHall/SelectHall';
import SelectTerminal from 'components/SelectTerminal/SelectTerminal';
import SelectAppPackage from 'components/SelectAppPackage/SelectAppPackage';
import SelectAPPID from 'components/SelectAPPID/SelectAPPID';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Application',
      component: Application,
      children: [
        {
          path: '/game',
          component: SelectGame
        },
        {
          path: '/platform',
          component: SelectPlatform
        },
        {
          path: '/hall',
          component: SelectHall
        },
        {
          path: '/terminal',
          component: SelectTerminal
        },
        {
          path: '/appPackage',
          component: SelectAppPackage
        },
        {
          path: 'appid',
          component: SelectAPPID
        }
      ]
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
