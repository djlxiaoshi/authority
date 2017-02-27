<template>
  <div class="terminal-list">
    <ul  v-for="item in terminalType">
      <li><label><input type="checkbox">{{item}}</label></li>
    </ul>
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
