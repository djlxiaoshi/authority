<template>
  <div class="hall-list">
    <ul v-for="item in hallType">
      <li><label><input type="checkbox">{{item}}</label></li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .hall-list
    height: 100%
    overflow: auto
</style>
<script type="text/ecmascript-6">
  export default{
    data () {
      return {
        hallType: ['三人厅', '四人厅', '五人厅', '六人厅', '七人厅', '八人厅', '九人厅', '十人厅', '更大厅']
      };
    }
  };
</script>
