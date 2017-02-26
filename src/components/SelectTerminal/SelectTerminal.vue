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
        terminalType: ['终端一', '终端二', '终端三', '终端四', '终端五', '终端六', '终端七', '终端八', '终端九']
      };
    }
  };
</script>
