<template>
    <div class='view-auth-wrap'>
      <div class="view-auth-head clearfix">
        <el-button type="success" class="go-back" size="small" @click="goBack">◁</el-button>
        <span>角色：产品/运营人员</span>
        <div class="btn-wrap">
          <el-button :disabled="true" size="small" type="primary">添加支付后台所有菜单权限</el-button>
          <el-button :disabled="true" size="small" type="primary">添加支付后台所有APPID权限</el-button>
        </div>
      </div>
      <hr>
      <div class="clearfix">
        <el-button size="small" type="primary">同步D后台BPID权限</el-button>
        <div class="search-wrap">
          <el-input  placeholder="请输入关键字搜索"></el-input>
        </div>
      </div>

      <div class="auth-list-wrap">
        <el-table :data="authData" border style="width: 100%">
          <el-table-column label="游戏" prop="game" align="center"></el-table-column>
          <el-table-column label="平台" prop="platform" align="center"></el-table-column>
          <el-table-column label="大厅" prop="hall" align="center"></el-table-column>
          <el-table-column label="终端" prop="terminal" align="center"></el-table-column>
          <el-table-column label="应用包" prop="appPackage" align="center"></el-table-column>
          <el-table-column label="APPID应用" prop="APPID" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      data () {
        return {
          authData: [{
            game: '地方棋牌',
            platform: '四川',
            hall: '全部',
            terminal: '全部',
            appPackage: '全部',
            APPID: '全部'
          }, {
            game: '地方棋牌',
            platform: '宜昌',
            hall: '全部',
            terminal: '全部',
            appPackage: '全部',
            APPID: '全部'
          }]
        };
      },
      methods: {
        goBack () {
          this.$emit('hideAuthList');
        }
      }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.styl"
  .view-auth-wrap
    .view-auth-head
      margin-bottom: 30px
      .btn-wrap
        float: right
    .search-wrap
      width: 400px
      float: right
    .auth-list-wrap
      margin-top: 30px
</style>
