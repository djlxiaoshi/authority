import Vue from 'vue';
import Router from 'vue-router';
import Application from 'components/Application/Application';
import MyAuth from 'components/MyAuth/MyAuth';
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
    {path: '/', redirect: '/home'},
    {
      path: '/home',
      name: 'Application',
      component: Application,
      children: [
        {path: '/', redirect: '/home/game'},
        {
          path: '/home/game',
          name: 'game',
          component: SelectGame
        },
        {
          path: '/home/platform',
          component: SelectPlatform
        },
        {
          path: '/home/hall',
          component: SelectHall
        },
        {
          path: '/home/terminal',
          component: SelectTerminal
        },
        {
          path: '/home/appPackage',
          component: SelectAppPackage
        },
        {
          path: '/home/appid',
          component: SelectAPPID
        }
      ]
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
      path: '/management',
      name: 'Management',
      component: Management,
      children: [
        {path: '/', redirect: '/management/game'},
        {
          path: '/management/game',
          component: SelectGame
        },
        {
          path: '/management/platform',
          component: SelectPlatform
        },
        {
          path: '/management/hall',
          component: SelectHall
        },
        {
          path: '/management/terminal',
          component: SelectTerminal
        },
        {
          path: '/management/appPackage',
          component: SelectAppPackage
        },
        {
          path: '/management/appid',
          component: SelectAPPID
        }
      ]
    }
  ],
  linkActiveClass: 'active'
});
