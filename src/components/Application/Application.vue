<template>
  <div class="auth-application">
    <div class="applicant-msg">
      <h5>申请人</h5>
      <hr>
      <span class="applicant-name">姓名：杜思睿（AnneDu）（后台数据）</span>
      <span class="department">部门：（后台数据）</span>
    </div>
    <div class="authority">
      <h5>申请内容：</h5>
      <hr>
      <h5>应用权限</h5>
      <p class="authority-text">
        支付后台APPID权限，会根据数据后台的BPID权限自动开通，如果没有某个应用的appid权限，请自行去data后台开通对应的bpid权限，如果在数据后台开通权限后，在支付后台还是提示无权限，请退出账号，清空浏览器缓存，重新登录一下即可查看；如果有疑问，请及时联系AnneDu，谢谢。</p>
    </div>


    <el-tabs value="first" style="min-height:400px">
      <el-tab-pane label="查询权限" name="first">
        <div class="view-content">
          <table class="ui single line celled table" style="width: 400px;">
            <thead>
            <tr>
              <th>ID</th>
              <th>查看权限</th>
            </tr>
            </thead>
            <tbody>
            <template v-if="showFlag === false">
              <tr v-for="(item, index) in viewAuth" v-show="item.have">
                <td>{{index + 1}}</td>
                <td>
                  <el-checkbox :checked="item.have" v-model.sync="item.have" disabled>{{item.authName}}</el-checkbox>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="(item, index) in viewAuth">
                <td>{{index + 1}}</td>
                <td>
                  <el-checkbox :checked="item.have" v-model.sync="item.have">{{item.authName}}</el-checkbox>
                </td>
              </tr>
            </template>

            </tbody>
            <tfoot class="full-width" style="text-align: center;">
            <tr>
              <td colspan="2" style="padding: 0;">
                <el-button type="text" @click="showMore" :icon="showFlag ? 'arrow-up' : 'arrow-down'"></el-button>
              </td>
            </tr>
            </tfoot>
          </table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="操作权限" name="second">
        <div class="select-auth-wrap">
          <!--<Select-auth parent-router="home"></Select-auth>-->
          <select-auth3 v-on:addSelData="addSelData"></select-auth3>
        </div>
        <div class="add-auth-wrap">
          <el-table :data="waitingAdd" border style="width: 100%">
            <el-table-column label="游戏" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.game">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="平台" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.platform">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="大厅" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.hall">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="终端" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.terminal">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="应用包" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.appPackage">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="APPID应用" align="center" width="300">
              <template scope="scope">
                <span v-for="child in scope.row.appid">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="权限内容" align="center">
              <el-table-column label="权限1" align="center">
                <template scope="scope">
                  <el-checkbox v-model="scope.row.deliverRefund">发货退款</el-checkbox>
                </template>
              </el-table-column>
              <el-table-column label="权限2" align="center">
                <template scope="scope">
                  <el-checkbox v-model="scope.row.warningSetting">报警设置</el-checkbox>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="业务审核人" prop="assessor" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button size="small" type="danger" @click="addAuth(scope.row, scope.$index)">添加</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!--已添加权限-->
        <div class="own-auth-wrap">
          <el-table :data="addedData" border style="width: 100%">
            <el-table-column label="游戏" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.game">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="平台" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.platform">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="大厅" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.hall">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="终端" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.terminal">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="应用包" align="center">
              <template scope="scope">
                <span v-for="child in scope.row.appPackage">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="APPID应用" align="center" width="300">
              <template scope="scope">
                <span v-for="child in scope.row.appid">{{child}}<br></span>
              </template>
            </el-table-column>
            <el-table-column label="权限内容" align="center">
              <el-table-column label="权限1" align="center">
                <template scope="scope">
                  <el-checkbox v-model="scope.row.deliverRefund">发货退款</el-checkbox>
                </template>
              </el-table-column>
              <el-table-column label="权限2" align="center">
                <template scope="scope">
                  <el-checkbox v-model="scope.row.warningSetting">报警设置</el-checkbox>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="业务审核人" prop="assessor" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button size="small" type="danger" @click="deleteAuth(scope.row, scope.$index)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>


    <!--申请理由-->
    <div class="application-reason-wrap">
      <el-input type="textarea" :rows="7" placeholder="请输入内容" v-model="applyReason"></el-input>
    </div>

    <div class="bottom-btn-wrap">
      <el-button type="primary" @click="cancelApply">取消</el-button>
      <el-button type="primary" @click="apply">提出申请</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SelectAuth from 'components/SelectAuth/SelectAuth';
  import SelectAuth2 from 'components/SelectAuth/SelectAuth2';
  import SelectAuth3 from 'components/SelectAuth/SelectAuth3';
  export default {
    data () {
      return {
        showFlag: false,
        applyReason: '',
        checkList: [],
        waitingAdd: [],
        addedData: [],
        viewAuth: [
          {
            id: 1,
            authName: '订单查询',
            have: true
          },
          {
            id: 2,
            authName: '欺诈订单',
            have: true
          },
          {
            id: 3,
            authName: '统计信息',
            have: true
          },
          {
            id: 4,
            authName: '产品配置',
            have: false
          },
          {
            id: 5,
            authName: '收入汇总',
            have: false
          },
          {
            id: 6,
            authName: '应用警报设置',
            have: false
          },
          {
            id: 7,
            authName: '财务对账',
            have: false
          }
        ]
      };
    },
    components: {
      SelectAuth,
      SelectAuth2,
      SelectAuth3
    },
    methods: {
      showMore () {
        this.showFlag = !this.showFlag;
      },
      showPrompt ($event) {
        console.log(1);
        if ($event.target.checked) {
          this.$alert('您所申请的内容，将会转到对应的业务审核人审核，如果您申请的内容与自己的工作职责不符，将不会予以通过；请慎重申请，谢谢', '提示', {
            confirmButtonText: '确定'
          });
        }
      },
      deleteAuth (item, index) {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.addedData.splice(index, 1);
        }).catch(() => {
          console.log('已删除该权限申请');
        });
      },
      addSelData (data) {
        // 加入等待队列
        //  这里要对数据格式做些处理，然后push到waitingAdd数组中
        let _dataCache = {};
        _dataCache.game = data[0]['isAll'] ? ['全部游戏'] : data[0]['checked'];
        _dataCache.platform = data[1]['isAll'] ? ['全部平台'] : data[1]['checked'];
        _dataCache.hall = data[2]['isAll'] ? ['全部'] : data[2]['checked'];
        _dataCache.terminal = data[3]['isAll'] ? ['全部'] : data[3]['checked'];
        _dataCache.appPackage = data[4]['isAll'] ? ['全部'] : data[4]['checked'];
        _dataCache.appid = data[5]['isAll'] ? ['全部'] : data[5]['checked'];
        _dataCache.deliverRefund = false;
        _dataCache.warningSetting = false;
        console.dir(_dataCache);
        this.waitingAdd.push(_dataCache);
      },
      addAuth (item, index) {
        // 设置两个复选框
//        item.deliverRefund = this.deliverRefund;
//        item.warningSetting = this.warningSetting;
        // 添加权限
        console.log(item);
        this.addedData.push(item);
        // 将预添加队列中的删除
        this.waitingAdd.splice(index, 1);
        // 复位复选框
//        this.deliverRefund = false;
//        this.warningSetting = false;
      },
      cancelApply () {
        this.$confirm('确定取消申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.alert('取消申请');
        }).catch(() => {
          window.alert('点错了');
        });
      },
      apply () {
        // 整合数据 addedData(操作权限) + 查看权限  +  申请理由
        let _oneApply = {};
        _oneApply.operateAuthLists = this.addedData;
        _oneApply.viewAuth = this.viewAuth;
        _oneApply.applyReason = this.applyReason;

        // 判断是否为空
        let haveViewAuth = _oneApply.viewAuth.some((value) => {
          return value.have;
        });

        if (_oneApply.operateAuthLists.length === 0 && !haveViewAuth) {
          this.$message({
            message: '请至少选择一种权限',
            type: 'warning'
          });
          console.log('由于无权限申请，申请被拒');
        } else if (_oneApply.applyReason.trim() === '') {
          this.$message({
            message: '申请理由不能为空',
            type: 'warning'
          });
        } else {
          this.$message({
            message: '申请成功',
            type: 'success'
          });
          console.log('这就是一条后台数据');
          console.log(_oneApply);
        }
        // 本地缓存
        // window.localStorage.applyLists = [];
        // window.localStorage.applyLists.push(_oneApply);
        //  console.log('提交数据给后台，利用本地缓存来做');
        // console.log('我的权限数据应该是从后台取数据');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/table.min.css"
  .auth-application
    width: 1200px
    margin: 0 auto
    h5
      margin: 10px 0
      font-weight: 700
    .applicant-msg, .authority, .view-content
      margin: 10px 0 20px 0
    .authority
      .authority-text
        line-height: 1.5rem
    .view-content
      .more-content
        display: inline-block
    .select-auth-wrap, .add-auth-wrap, .own-auth-wrap, .application-reason-wrap, .bottom-btn-wrap
      margin-bottom: 50px
    .bottom-btn-wrap
      text-align: center

</style>
