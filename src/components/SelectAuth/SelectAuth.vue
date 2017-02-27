<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button type="text" @click="toggleSelected" class="please-select">--请选择-- </el-button>
    <div class="select-box-wrap" id="select-box-wrap">
      <div class="box-header">
        <h5 class="box-title">应用选择器</h5>
        <div class="btn-wrap clearfix">
          <el-button type="primary" size="mini">确定</el-button>
          <el-button type="warning" size="mini">置空</el-button>
        </div>
      </div>
      <div class="box-body">
        <ul class="left-part">
          <li><router-link to="/game">请选择游戏</router-link></li>
          <li><router-link to="/platform">请选择平台</router-link></li>
          <li><router-link to="/hall">请选择大厅</router-link></li>
          <li><router-link to="/terminal">请选择终端</router-link></li>
          <li><router-link to="/appPackage">请选择应用包</router-link></li>
          <li><router-link to="/appid">请选择APPID</router-link></li>
        </ul>
        <div class="right-part">
          <el-checkbox class="">全选/全不选</el-checkbox>
          <div class="search-input"><el-input placeholder="请输入关键词" icon="search"></el-input></div>
          <div class="data-list">
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
  import $ from 'jquery/dist/jquery.min';
  export default {
    methods: {
      toggleSelected () {
        $('#select-box-wrap').toggle(300);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.styl"
  .select-application
    position: relative
    .please-select
      display: inline-block
      width: 200px
      text-align: center
      color:black
      border-right:1px solid #e5e5e5
      &:hover
        text-decoration :none
    .select-box-wrap
      display: none
      background :#fff
      position: absolute
      top: 50px
      z-index: 20
      .box-header
        background: #0099CC
        .box-title
          font-weight:700
          font-size: 14px
          display: inline-block
          vertical-align: top
        .btn-wrap
          float: right
          margin-top: 5px
          margin-right: 20px
      .box-body
        height: 220px
        .left-part
          display: inline-block
          height: 100%
          overflow: hidden
          text-align: center
          vertical-align :top
          border:1px solid #000000
          li
            padding:10px
        .right-part
          display: inline-block
          height:100%
          width: 400px
          vertical-align :top
          padding:10px 20px
          .search-input
            margin:10px 0
          .data-list
            height: 130px
</style>
