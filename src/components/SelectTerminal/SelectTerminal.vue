<template>
  <div class="terminal-list">
    <template  v-for="item in terminalType">
      <div><el-checkbox >{{item}}</el-checkbox></div>
    </template>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .terminal-list
    height: 100%
    overflow: auto
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        terminalType: ['所有终端', 'IOS', 'PC', 'ANDRIOD']
      };
    }
  };
</script>
