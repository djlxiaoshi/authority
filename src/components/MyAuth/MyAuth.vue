<template>
  <div class="my-auth-wrap">
    <el-tabs v-model="activeName" @tab-click="getMyAuthData">
      <!--我的权限-->
      <el-tab-pane label="我的权限" name="first">
        <div class="own-auth">
          <h4>已有权限列表</h4>
          <el-tabs v-model="subActive" type="border-card">
            <el-tab-pane label="查看权限" name="subFirst">
              <div class="search-input clearfix">
                <el-input placeholder="请输入关键字" icon="search" v-model="searchInput"></el-input>
              </div>
              <div class="view-auth">
                <el-table :data="serviceData.viewAuth" border style="width: 100%">
                  <el-table-column label="ID" align="center">
                    <template scope="scope">
                      <span>{{scope.row.index}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="菜单" align="center">
                    <template scope="scope">
                      <span>{{scope.row.name}}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="操作权限" name="subSecond">
              <div class="search-input">
                <el-input placeholder="请输入关键字" icon="search"></el-input>
              </div>
              <div class="operate-auth">
                <el-table :data="serviceData.operateAuth" border style="width: 100%">
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

      <!--待审权限-->
      <el-tab-pane name="second">
        <span slot="label">
          <el-badge :value="pendingNum" class="item" size="small">
            <div style="margin: -10px 0;">待审权限</div>
          </el-badge>
        </span>
        <!--搜索框-->
        <div class="search-input clearfix">
          <el-input placeholder="请输入关键字" icon="search" size="small" class="search-input"></el-input>
        </div>

        <div class="view-auth-wrap">
          <h4 class="auth-title">查询权限</h4>
          <!--待审权限 -> 查看权限表-->
          <el-table :data="serviceData.viewAuth" border style="width: 100%">
            <el-table-column label="ID" align="center">
              <template scope="scope">
                {{scope.$index}}
              </template>
            </el-table-column>
            <el-table-column label="权限内容" align="left">
              <template scope="scope">
                <el-checkbox checked disabled v-for="item in scope.row.auth">{{item}}</el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请理由" prop="reason" align="left"></el-table-column>
            <el-table-column label="当前状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="handler" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button type="warning" size="mini" @click="withdraw(scope.row.uuid, 'viewAuth')">撤回申请</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="operate-auth-wrap">
          <h4 class="auth-title">操作权限</h4>
          <!--待审权限 -> 操作权限表-->
          <el-table :data="serviceData.operateAuth" border style="width: 100%">
            <el-table-column label="权限类型" align="center">
              <template scope="scope"><span>操作权限</span></template>
            </el-table-column>
            <el-table-column label="游戏" prop="game" align="center"></el-table-column>
            <el-table-column label="平台" prop="platform" align="center"></el-table-column>
            <el-table-column label="大厅" prop="hall" align="center"></el-table-column>
            <el-table-column label="终端" prop="terminal" align="center"></el-table-column>
            <el-table-column label="应用包" prop="appPackage" align="center"></el-table-column>
            <el-table-column label="APPID应用" prop="APPID" align="center"></el-table-column>
            <el-table-column label="权限内容" align="left">
              <template scope="scope">
                <el-checkbox checked disabled v-for="item in scope.row.auth">{{item}}</el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请理由" prop="reason" align="left"></el-table-column>
            <el-table-column label="处理状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="handler" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button type="danger" size="mini" @click="withdraw(scope.row.uuid, 'operateAuth')">撤回申请</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <!--被驳回权限-->
      <el-tab-pane name="third">
        <span slot="label">
          <el-badge :value="rejectNum" class="item" size="small">
            <div style="margin: -5px 0;">被驳回权限</div>
          </el-badge>
        </span>
        <div class="clearfix ">
          <el-input placeholder="请输入关键字" icon="search" size="small" class="search-input"></el-input>
        </div>
        <!--被驳回的查看权限-->
        <div class="view-auth-wrap">
          <h4 class="auth-title">查询权限</h4>
          <!--待审权限 -> 查看权限表-->
          <el-table :data="serviceData.viewAuth" border style="width: 100%">
            <el-table-column label="ID" align="center">
              <template scope="scope">
                {{scope.$index + 1}}
              </template>
            </el-table-column>
            <el-table-column label="权限内容" align="left">
              <template scope="scope">
                <el-checkbox checked disabled v-for="item in scope.row.auth">{{item}}</el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请时间" prop="applyTime" align="center"></el-table-column>
            <el-table-column label="当前状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="handler" align="center"></el-table-column>
            <el-table-column label="驳回理由" prop="reason" align="left"></el-table-column>
          </el-table>
        </div>
        <!--被驳回的操作权限-->
        <div class="operate-auth-wrap">
          <h4 class="auth-title">操作权限</h4>
          <el-table :data="serviceData.operateAuth" border style="width: 100%">
            <el-table-column label="游戏" prop="game" align="center"></el-table-column>
            <el-table-column label="平台" prop="platform" align="center"></el-table-column>
            <el-table-column label="大厅" prop="hall" align="center"></el-table-column>
            <el-table-column label="终端" prop="terminal" align="center"></el-table-column>
            <el-table-column label="应用包" prop="appPackage" align="center"></el-table-column>
            <el-table-column label="APPID应用" prop="APPID" align="center"></el-table-column>
            <el-table-column label="权限内容" align="left">
              <template scope="scope">
                <el-checkbox checked disabled v-for="item in scope.row.auth">{{item}}</el-checkbox>
              </template>
            </el-table-column>
            <el-table-column label="申请时间" prop="applyTime" align="center"></el-table-column>
            <el-table-column label="处理状态" prop="status" align="center"></el-table-column>
            <el-table-column label="当前处理人" prop="handler" align="center"></el-table-column>
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
        searchInput: '',
        serviceData: {},
        pendingNum: 0,
        rejectNum: 0,
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
      withdraw (uuid, authType) {
        let _this = this;
        this.$confirm('您确定撤回当前申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          callback: function (action, instance) {
            if (action === 'confirm') {
              _this.$http.get(`/api/myAuthData?authType='viewAuth'`).then(response => {
                _this.$message({
                  type: 'success',
                  message: '撤销权限操作成功'
                });
              }, response => {
                // error callback
              });
            } else {
              _this.$message({
                type: 'warning',
                message: '放弃取消'
              });
            }
          }
        });
      },
      selectData () {
        // let _selectData = [];
        this.authData.forEach((value) => {
        });
      },
      getMyAuthData (tab, event) {
        let _authType = '';

        if (tab.index === '0') {
          _authType = 'myAuth';
        } else if (tab.index === '1') {
          _authType = 'pendingAuth';
        } else {
          _authType = 'rejectAuth';
        }

        this.$http.get(`/api/myAuthData?authType=${_authType}`).then(response => {
          this.serviceData = response.body.data;
          console.log('tags切换，获取后台数据');
          console.log(this.serviceData);
        }, response => {
          // error callback
        });
      },
      change () {
      },
      dataNum () {
        return this.serviceData ? (this.serviceData.viewAuth.length + this.serviceData.operateAuth.length) : 0;
      }
    },
    created () {
      // 页面载入获取我的权限-->查看权限列表
      this.$http.get('/api/myAuthData?authType=myAuth').then(response => {
        this.serviceData = response.body.data;
      }, response => {
        // error callback
      });

      // 获取待审权限和被驳回条目的数目
      this.$http.get('/api/dataNum').then(response => {
        this.pendingNum = response.body.data.pendingNum;
        this.rejectNum = response.body.data.rejectNum;
        console.log(this.pendingNum);
        console.log(this.rejectNum);
      }, response => {
        // error callback
      });
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
    .view-auth-wrap, .operate-auth-wrap
      border: 1px solid #e5e5e5
      margin-top: 20px;
      margin-bottom: 10px
      .auth-title
        margin: 20px
</style>
