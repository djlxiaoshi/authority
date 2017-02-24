<template>
  <ul id="app">
    <h3 class="authority-center">权限中心</h3>
    <div class="router">
      <ul class="router-left">
        <li><router-link to="/">权限申请</router-link></li>
        <li><router-link to="myauto">我的权限</router-link></li>
        <li><router-link to="approval">我的审批</router-link></li>
        <li><router-link to="management">权限管理</router-link></li>
      </ul>
      <div class="router-right">
        <router-view></router-view>
      </div>
    </div>
    <Chart></Chart>
  </ul>
</template>

<script type="text/ecmascript-6">
  import Chart from './components/Chart';
  export default {
    components: {
      Chart
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .authority-center
      padding: 5px
      background: #66CCFF
      margin:0
    .router
      display : flex
      width:100%
      height: 500px
      background : lightcoral
      .router-left
        flex:0 0 200px
        height:100%;
        background :yellow
        li
          text-align: center
          line-height: 2rem
          &:hover
            background:#e5e5e5
      .router-right
        flex:0 0 1
</style>
