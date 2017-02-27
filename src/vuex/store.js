/**
 * Created by JohnLi on 2017/2/27.
 */
import Vue from 'vue';
import Vuex from 'vuex';
//告诉Vue使用vuex
Vue.use(Vuex);
//创建一个对象来保存应用启动时的初始状态
const state = {
// 应用启动时，count为0
  selected: [],
  serviceData: ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台']
};
//创建一个对象存储一系列我们接下来要写的mutation函数
const mutations = {
//    放置我们状态变更函数

  SELECTEDALL (state) {
    state.selected = [];
    state.serviceData.forEach((value) => {
      state.selected.push(value);
    });
  },
  CLEARALL (state) {
    state.selected = [];
  }
};
//整合初始状态和变更函数，我们就得到了我们所需的store
// 至此，这个store就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations
});
