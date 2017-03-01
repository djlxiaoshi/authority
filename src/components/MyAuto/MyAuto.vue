<template>
  <div class="my-auth-wrap">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="我的权限" name="first">
        <div class="own-auth">
          <h4>已有权限列表</h4>
          <el-tabs v-model="subActive" type="border-card">
            <el-tab-pane label="应用权限" name="subFirst">
              <div class="search-input clearfix" size="small">
                <el-input placeholder="请输入关键字" icon="search"></el-input>
              </div>
              <div class="application-auth">
                <el-table :data="tableData" border style="width: 100%">
                  <el-table-column label="游戏" prop="game" align="center"></el-table-column>
                  <el-table-column label="平台" prop="platform" align="center"></el-table-column>
                  <el-table-column label="大厅" prop="hall" align="center"></el-table-column>
                  <el-table-column label="终端" prop="terminal" align="center"></el-table-column>
                  <el-table-column label="应用包" prop="appPackage" align="center"></el-table-column>
                  <el-table-column label="APPID应用" prop="APPID" align="center"></el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="查看权限" name="subSecond">
              <div class="search-input clearfix">
                <el-input placeholder="请输入关键字" icon="search"></el-input>
              </div>
              <div class="view-auth">
                <el-table :data="authType" border style="width: 100%">
                  <el-table-column label="ID" prop="id" align="center"></el-table-column>
                  <el-table-column label="菜单" prop="menu" align="center"></el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="操作权限" name="subThird">
              <div class="search-input">
                <el-input placeholder="请输入关键字" icon="search"></el-input>
              </div>
              <div class="operate-auth">
                <el-table :data="tableData" border style="width: 100%">
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
                  <el-table-column label="业务审核人" prop="assessor" align="center"></el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <el-tab-pane label="待审权限" name="second">
        <div class="search-input clearfix">
          <el-input placeholder="请输入关键字" icon="search" size="small"></el-input>
        </div>
        <div class="check-auth">
          <el-table :data="tableData" border style="width: 100%">
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
            <el-table-column label="处理状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="assessor" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button type="danger" size="mini" @click="withdraw">撤回申请</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="被驳回权限" name="third">
        <div class="clearfix">
          <el-input placeholder="请输入关键字" icon="search" size="small" class="search-input"></el-input>
        </div>
        <div class="my-auth-table">
          <el-table :data="tableData" border style="width: 100%">
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
            <el-table-column label="处理状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="assessor" align="center"></el-table-column>
            <el-table-column label="驳回理由" prop="reason" align="center"></el-table-column>
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
        subActive: 'subFirst',
        tableData: [{
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
          reason: '就是不想批准，咋地'
        }],
        authType: [{
          id: 1,
          menu: '订单查询'
        }, {
          id: 2,
          menu: '欺诈查询'
        }, {
          id: 3,
          menu: '产品配置'
        }, {
          id: 4,
          menu: '收入汇总'
        }]
      };
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event);
      },
      withdraw () {
        this.$confirm('确定删除当前项吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          console.log('确定撤销');
        }).catch(function () {
          console.log('放弃操作');
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.styl"
  .my-auth-wrap
    .own-auth
      h4
        margin: 10px 0
    .search-input
      width: 300px
      float: right
      margin-bottom: 10px
</style>
