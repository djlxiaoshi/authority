<template>
  <ul id="app">
    <h3 class="authority-center">权限中心</h3>
    <el-row>
      <el-col :span="3" class="router-left">
        <ul class="router-link-wrap">
          <li>
            <router-link to="/home">权限申请</router-link>
          </li>
          <li>
            <router-link to="/myauto">我的权限</router-link>
          </li>
          <li>
            <router-link to="/approval">我的审批</router-link>
          </li>
          <li>
            <router-link to="/management">权限管理</router-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="21" class="router-right">
        <div class="main-width">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .authority-center
      padding: 5px
      background: #66CCFF
      margin: 0
    .router-left
      .router-link-wrap
        width:100%
        li
          text-align: center
          padding:5px 10px
    .router-right
      .main-width
        width: 1470px
        padding:0 50px
        border:1px solid #e5e5e5
    .active
      color: lightsalmon
</style>
