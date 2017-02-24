<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <a class="please-select" href="javascript:void(0)" @click="selectBox">--请选择--</a>
    <div class="select-box-wrap">
      <h4 class="box-name">应用选择器
        <div class="btn-group btn-group-xs">
          <a href="javascript:void (0)" class="btn btn-primary ">确定</a><a href="javascript:void (0)" class="btn btn-danger">置空</a>
        </div>
      </h4>
      <div class="box-body">
        <div class="scroll-left-wrap" id="scroll-left-wrap">
          <ul class="scroll-inner">
            <li><a href="#">请选择游戏</a></li>
            <li><a href="#">请选择平台</a></li>
            <li><a href="#">请选择大厅</a></li>
            <li><a href="#">请选择终端</a></li>
            <li><a href="#">请选择应用包</a></li>
            <li><a href="#">请选择APPID</a></li>
          </ul>
        </div>
        <div class="select-right">
          <form action="">
            <label ><input type="checkbox">全选/全部选</label>
            <br>
            <input type="text" placeholder="Q:请输入关键词" class="search">
          </form>
          <div class="scroll-right-wrap" id="scroll-right-wrap">
            <ul class="scroll-inner">
              <li><label ><input type="checkbox">所有大厅</label></li>
              <li><label ><input type="checkbox">大连大厅</label></li>
              <li><label ><input type="checkbox">自贡大厅</label></li>
              <li><label ><input type="checkbox">四川大厅</label></li>
              <li><label ><input type="checkbox">济南大厅</label></li>
              <li><label ><input type="checkbox">昆明大厅</label></li>
              <li><label ><input type="checkbox">营口大厅</label></li>
              <li><label ><input type="checkbox">南充大厅</label></li>
              <li><label ><input type="checkbox">湖北大厅</label></li>
              <li><label ><input type="checkbox">湖南大厅</label></li>
              <li><label ><input type="checkbox">深圳大厅</label></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    methods: {
      selectBox () {
        // todo
      }
    },
    mounted () {
      /* eslint-disable no-unused-vars */
      let leftScroll = new BScroll('#scroll-left-wrap', {
        click: true
      });
      /* eslint-disable no-unused-vars */
      let rightScroll = new BScroll('#scroll-right-wrap', {
        click: true
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .select-application
    width: 400px
    .please-select
      display: inline-block
      width: 200px
      text-align: center
      color:black
      border:1px solid #000000
      &:hover
        text-decoration :none
    .select-box-wrap
      background :#fff
      .box-name
        font-weight:700
        font-size: 14px
        background: #0099CC
      .box-body
        height: 200px
        .scroll-left-wrap
          display: inline-block
          height: 100%
          overflow: hidden
          text-align: center
          vertical-align :top
          border:1px solid #000000
          .scroll-inner
            a
              display: inline-block
              padding:10px 40px
        .select-right
          display: inline-block
          height:100%
          vertical-align :top
          overflow: hidden
          .search
            margin: 10px 0
            outline :none
            border:1px solid #000000
            text-indent :2rem
          .scroll-right-wrap
            width: 200px
            overflow: hidden

</style>
