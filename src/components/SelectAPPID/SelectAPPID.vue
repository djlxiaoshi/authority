<template>
    <div class="appid-list">
        <ul  v-for="item in appidType">
            <li><label><input type="checkbox">{{item}}</label></li>
        </ul>
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
          appidType: ['APPID1', 'APPID2', 'APPID3', 'APPID4']
        };
      }
    };
</script>
