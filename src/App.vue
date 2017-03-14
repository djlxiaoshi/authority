<template>
  <div id="app" class="app">
    <h3 class="app-head">权限中心</h3>
    <div class="app-body">
      <div class="app-body-left">
        <div class="router-wrap">

          <router-link to="/home" class="router-item">权限申请</router-link>
          <router-link to="/myauth" class="router-item">
            <el-badge :value="newAuthNum" :max="10" class="item">我的权限</el-badge>
          </router-link>

          <router-link to="/approval" class="router-item">
            <el-badge :value="approvalNum" :max="10" class="item">我的审批</el-badge>
          </router-link>

          <router-link to="/management" class="router-item">权限管理</router-link>
        </div>
      </div>
      <div class="app-body-right container">
        <keep-alive>
          <router-view :new-msg="newMsg"></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        newMsg: {}
      };
    },
    methods: {
    },
    computed: {
      newAuthNum () {
        return this.newMsg.pending + this.newMsg.reject;
      },
      approvalNum () {
        return this.newMsg.arvView + this.newMsg.arvOpt;
      }
    },
    created () {
      this.$http.get('/api/app/newMsg').then(response => {
        // 返回一个对象{"pending":3, "reject": 7, "arvView": 4, "arvOpt": 5}
        // this.newMsg = response.body.data;
        this.newMsg = {'pending': 3, 'reject': 7, 'arvView': 4, 'arvOpt': 5};
      }, response => {
        // error callback
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/css/common.styl"
  #app
    .app-head
      height: 40px
      line-height: 40px
      text-align: center
      background: #66CCFF
    .app-body
      display: flex
      position: relative
      .app-body-left
        flex: 0 0 200px
        .router-wrap
          width: 100%
          .router-item
            display: block
            width: 100%;
            margin: 10px 0
            text-align: center
    .active
      color: lightsalmon
</style>
