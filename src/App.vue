<template>
  <div id="app" class="app">
    <h3 class="app-head">权限中心</h3>
    <div class="app-body">
      <div  class="app-body-left">
        <div class="router-wrap">
          <router-link to="/home" class="router-item">权限申请</router-link>
          <router-link to="/myauto" class="router-item">我的权限</router-link>
          <router-link to="/approval" class="router-item">我的审批</router-link>
          <router-link to="/management" class="router-item">权限管理</router-link>
        </div>
      </div>
      <div class="app-body-right container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
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
        flex:0 0 200px
        .router-wrap
          width:100%
          .router-item
            display: block
            width:100%;
            margin: 10px 0
            text-align: center
    .active
      color: lightsalmon
</style>
