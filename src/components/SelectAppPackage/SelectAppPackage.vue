<template>
    <div class="app-package-list">
        <template  v-for="item in appPackageType">
          <div><el-checkbox >{{item}}</el-checkbox></div>
        </template>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .app-package-list
    height: 100%
    overflow: auto
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          appPackageType: ['所有应用包', '360', '新浪', '腾讯', '应用包5', '应用包6']
        };
      }
    };
</script>
