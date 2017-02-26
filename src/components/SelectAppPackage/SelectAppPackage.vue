<template>
    <div class="app-package-list">
        <ul  v-for="item in appPackageType">
            <li><label><input type="checkbox">{{item}}</label></li>
        </ul>
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
          appPackageType: ['应用包1', '应用包2', '应用包3', '应用包4', '应用包5', '应用包6']
        };
      }
    };
</script>
