<template>
  <div class='my-appoval'>
    <h4>审批列表</h4>
    <hr>
    <el-tabs v-model="activeName">
      <el-checkbox>全选</el-checkbox>
      <el-button type="primary" size="small">批量通过</el-button>
      <el-button type="warning" size="small">批量驳回</el-button>
      <div class="search-input clearfix" size="small">
        <el-input placeholder="请输入关键字" icon="search"></el-input>
      </div>

      <el-tab-pane label="用户管理" name="first">
        <div class="my-auth-wrap">
          <el-table :data="viewData" border style="width: 100%">
            <el-table-column label="选项" align="center">
              <template scope="scope">
                <el-checkbox></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请人" prop="applicant" align="center"></el-table-column>
            <el-table-column label="申请人角色" prop="role" align="center"></el-table-column>
            <el-table-column label="所属部门" prop="department" align="center"></el-table-column>
            <el-table-column label="查看权限" prop="viewAuth" align="center">
              <template scope="scope">
                <div style="display: inline"><el-checkbox style="display: inline-block;vertical-align: middle">订单查询</el-checkbox></div>
                <div style="display: inline"><el-checkbox style="display: inline-block;vertical-align: middle">欺诈订单</el-checkbox></div>
                <div style="display: inline"><el-checkbox style="display: inline-block;vertical-align: middle">统计信息</el-checkbox></div>
                <div style="display: inline"><el-checkbox style="display: inline-block;vertical-align: middle">收入汇总</el-checkbox></div>
              </template>
            </el-table-column>
            <el-table-column label="申请时间" prop="applicationTime" align="center"></el-table-column>
            <el-table-column label="申请理由" prop="applicateReason" align="center"></el-table-column>
            <el-table-column label="操作" prop="operation" align="center">
              <template scope="scope">
                <el-button type="primary" size="mini">审核通过</el-button>
                <el-button type="warning" size="mini">审核驳回</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <div class="operate-auth">
          <el-table :data="operateAuthData" border style="width: 100%">
            <el-table-column label="选项" align="center" width="40">
              <template scope="scope">
                <el-checkbox></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请人" prop="applicant" align="center"></el-table-column>
            <el-table-column label="申请人角色" prop="role" align="center"></el-table-column>
            <el-table-column label="所属部门" prop="department" align="center"></el-table-column>
            <el-table-column label="游戏" prop="game" align="center"></el-table-column>
            <el-table-column label="平台" prop="platform" align="center"></el-table-column>
            <el-table-column label="大厅" prop="hall" align="center"></el-table-column>
            <el-table-column label="终端" prop="terminal" align="center"></el-table-column>
            <el-table-column label="应用包" prop="appPackage" align="center"></el-table-column>
            <el-table-column label="APPID应用" prop="APPID" align="center"></el-table-column>
            <el-table-column label="权限内容" align="center">
              <el-table-column label="权限1" align="center">
                <template scope="scope">
                  <el-checkbox>发货退款</el-checkbox>
                </template>
              </el-table-column>
              <el-table-column label="权限2" align="center">
                <template scope="scope">
                  <el-checkbox>报警设置</el-checkbox>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="申请时间" prop="applicationTime" align="center"></el-table-column>
            <el-table-column label="申请理由" prop="applicateReason" align="center"></el-table-column>
            <el-table-column label="操作" prop="operation" align="center">
              <template scope="scope">
                <div style="display: inline-block;vertical-align: middle">
                <el-button type="primary" size="mini">审核通过</el-button>
              </div>
              <div style="display: inline-block;vertical-align: middle">
                <el-button type="warning" size="mini">审核驳回</el-button>
              </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeName: 'first',
        viewData: [{
          applicant: 'DJL',
          role: '管理员',
          department: '数据支付部',
          viewAuth: '',
          applicationTime: '2017-02-27',
          applicateReason: '想做更好'
        }],
        operateAuthData: [{
          applicant: 'DJL',
          role: '管理员',
          department: '数据支付部',
          game: '地方棋牌',
          platform: '四川',
          hall: '全部',
          terminal: '全部',
          appPackage: '全部',
          APPID: '全部',
          auth: [{name: 'd', age: 20}],
          status: '通过',
          assessor: 'DJLXS',
          applicationTime: '2017-02-27',
          applicateReason: '想做更好'
        }]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/common.styl'
  .my-appoval
    .search-input
      width: 300px
      float: right
      margin-bottom: 10px
</style>
