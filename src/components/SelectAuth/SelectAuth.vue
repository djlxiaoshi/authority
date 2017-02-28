<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button @click="toggleSelected" class="please-select">--请选择-- </el-button>
    <div class="select-box-wrap" id="select-box-wrap">
      <div class="box-header clearfix">
        <h5 class="box-title">应用选择器</h5>
        <div class="btn-wrap">
          <el-button type="primary" size="mini">确定</el-button>
          <el-button type="warning" size="mini">置空</el-button>
        </div>
      </div>
      <div class="box-body">
        <ul class="left-part" v-if="parentRouter === 'home'">
          <li><router-link to="/home/game">请选择游戏</router-link></li>
          <li><router-link to="/home/platform">请选择平台</router-link></li>
          <li><router-link to="/home/hall">请选择大厅</router-link></li>
          <li><router-link to="/home/terminal">请选择终端</router-link></li>
          <li><router-link to="/home/appPackage">请选择应用包</router-link></li>
          <li><router-link to="/home/appid">请选择APPID</router-link></li>
        </ul>
        <ul class="left-part" v-else>
          <li><router-link to="/management/game">请选择游戏</router-link></li>
          <li><router-link to="/management/platform">请选择平台</router-link></li>
          <li><router-link to="/management/hall">请选择大厅</router-link></li>
          <li><router-link to="/management/terminal">请选择终端</router-link></li>
          <li><router-link to="/management/appPackage">请选择应用包</router-link></li>
          <li><router-link to="/management/appid">请选择APPID</router-link></li>
        </ul>
        <div class="right-part">
          <el-checkbox class="">全选/全不选</el-checkbox>
          <div class="select-auth-input"><el-input placeholder="请输入关键词" icon="search"></el-input></div>
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
    },
    props: ['parentRouter']
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
      padding-bottom: 30px
      position: absolute
      top: 50px
      z-index: 20
      background :#ffffff
      border:5px solid #e5e5e5
      border-radius: 5px
      .box-header
        background: #0099CC
        line-height: 14px
        .box-title
          font-weight:700
          font-size: 14px
          display: inline-block
          vertical-align: top
        .btn-wrap
          float: right
          padding: 10px 20px
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
          .select-auth-input
            margin:10px 0
          .data-list
            height: 130px
</style>
