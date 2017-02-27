<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button type="text" @click="toggleSelected" class="please-select">--请选择-- </el-button>
    <div class="select-box-wrap" id="select-box-wrap">
      <h4 class="box-name">应用选择器
        <div class="btn-group btn-group-xs">
          <el-button type="primary" size="mini">确定</el-button>
          <el-button type="warning" size="mini">置空</el-button>
        </div>
      </h4>
      <div class="box-body">
        <div class="scroll-left-wrap" id="scroll-left-wrap">
          <ul class="scroll-inner">
            <li><router-link to="/game">请选择游戏</router-link></li>
            <li><router-link to="/platform">请选择平台</router-link></li>
            <li><router-link to="/hall">请选择大厅</router-link></li>
            <li><router-link to="/terminal">请选择终端</router-link></li>
            <li><router-link to="/appPackage">请选择应用包</router-link></li>
            <li><router-link to="/appid">请选择APPID</router-link></li>
          </ul>
        </div>
        <div class="select-right">
          <form action="">
            <label ><input type="checkbox">全选/全部选</label>
            <br>
            <input type="text" placeholder="Q:请输入关键词" class="search">
          </form>
          <div class="scroll-right-wrap" id="scroll-right-wrap">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import $ from 'jquery/dist/jquery.min';
  export default {
    methods: {
      toggleSelected () {
        $('#select-box-wrap').toggle(300);
      }
    },
    mounted () {
      /* eslint-disable no-unused-vars */
      let leftScroll = new BScroll('#scroll-left-wrap', {
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
      display: none
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
            height: 120px
</style>
