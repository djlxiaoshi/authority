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
    <div class="view-content">
      <h5>查看内容</h5>
      <form action="">
        <div class="" style="display: inline-block;vertical-align: center">
          <el-checkbox>订单查询</el-checkbox>
          <el-checkbox>欺诈订单</el-checkbox>
          <el-checkbox>统计信息</el-checkbox>
        </div>
        <div class="more-content" v-show="moreContent" style="display: inline-block;vertical-align: center">
          <el-checkbox @change="showPrompt">产品配置</el-checkbox>
          <el-checkbox @change="showPrompt">收入汇总</el-checkbox>
          <el-checkbox>应用警报设置</el-checkbox>
          <el-checkbox @change="showPrompt">财务对账</el-checkbox>
        </div>
        <div style="display: inline-block;vertical-align: center">
          <el-button type="text" @click="showMore" v-if="showFlag">更多内容</el-button>
          <el-button type="text" @click="showMore" v-else>收起</el-button>
        </div>
      </form>
    </div>

    <div class="select-auth-wrap">
      <Select-auth parent-router="home"></Select-auth>
    </div>

    <!--添加权限-->
    <div class="add-auth-wrap">
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
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button size="small" type="danger">添加</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--已添加权限-->
    <div class="own-auth-wrap">
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
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button size="small" type="danger" @click="confirmDel">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!--申请理由-->
    <div class="application-reason-wrap">
      <el-input type="textarea" :rows="7" placeholder="请输入内容"></el-input>
    </div>

    <div class="bottom-btn-wrap">
      <el-button type="primary">取消</el-button>
      <el-button type="primary">提出申请</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SelectAuth from 'components/SelectAuth/SelectAuth';
  export default {
    data () {
      return {
        moreContent: false,
        showFlag: true,
        tableData: [{
          game: '地方棋牌',
          platform: '四川',
          hall: '全部',
          terminal: '全部',
          appPackage: '全部',
          APPID: '全部',
          auth: [{name: 'd', age: 20}],
          assessor: 'DJLXS'
        }]
      };
    },
    components: {
      SelectAuth
    },
    methods: {
      showMore () {
        this.moreContent = !this.moreContent;
        this.showFlag = !this.moreContent;
      },
      showPrompt ($event) {
        console.log(1);
        if ($event.target.checked) {
          this.$alert('您所申请的内容，将会转到对应的业务审核人审核，如果您申请的内容与自己的工作职责不符，将不会予以通过；请慎重申请，谢谢', '提示', {
            confirmButtonText: '确定'
          });
        }
      },
      confirmDel () {
        this.$alert('确认删除吗', '提示', {
          confirmButtonText: '确定'
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .auth-application
    width: 1200px
    margin: 0 auto
    h5
      margin: 10px 0
      font-weight:700
    .applicant-msg, .authority, .view-content
      margin: 10px 0 20px 0
    .authority
      .authority-text
        line-height :1.5rem
    .view-content
      .more-content
        display: inline-block
    .select-auth-wrap, .add-auth-wrap, .own-auth-wrap, .application-reason-wrap, .bottom-btn-wrap
      margin-bottom: 50px
    .bottom-btn-wrap
      text-align: center

</style>
