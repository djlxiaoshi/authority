<template>
  <div class="platform-list">
    <ul  v-for="item in platformType">
      <li><label><input type="checkbox">{{item}}</label></li>
    </ul>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .platform-list
    height: 100%
    overflow: auto
</style>
<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          platformType: ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台']
        };
      }
    };
</script>
