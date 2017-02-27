<template>
  <div class="game-list">
    <template v-for="item in gameType">
      <div><el-checkbox >{{item}}</el-checkbox></div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
  // import BScroll from 'better-scroll';
  export default {
    mounted () {
    },
    data () {
      return {
        gameType: ['所有游戏', '德州扑克', '斗地主', '地方棋牌', '印尼棋牌', 'IPOKER', '四人斗地主', '三公', '麻将', '博定']
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .game-list
    height: 100%
    overflow: auto
</style>
