<template>
    <div class="appid-list">
        <template  v-for="item in appidType">
            <div><el-checkbox >{{item}}</el-checkbox></div>
        </template>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
    .appid-list
        height: 100%
        overflow: auto
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          appidType: ['所有APPID', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）', '德州扑克-ANDROID-主版本-简体（1499）', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）']
        };
      }
    };
</script>
