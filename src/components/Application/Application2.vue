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
      <!--<Select-auth parent-router="home"></Select-auth>-->
      <select-auth3 v-on:addSelData="addSelData"></select-auth3>
    </div>

    <!--添加权限-->
    <div class="add-auth-wrap">
      <table class="ui celled structured table">
        <thead>
        <tr class="center aligned">
          <th >游戏</th>
          <th >平台</th>
          <th >大厅</th>
          <th >终端</th>
          <th >应用包</th>
          <th >APPID应用</th>
          <th colspan="2">权限内容</th>
          <th >业务审核人</th>
          <th >操作</th>
        </tr>
        </thead>
        <tbody>
          <template v-if="waitingAdd.length > 0">
          <tr class="center bottom aligned" v-for="(item, index) in waitingAdd" >
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.game">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.platform">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.hall">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.terminal">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.appPackage">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.appid">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><el-checkbox v-model="item.deliverRefund">发货退款</el-checkbox></td>
            <td class="middle aligned"><el-checkbox v-model="item.warningSetting">报警设置</el-checkbox></td>
            <td class="middle aligned">DJLXS</td>
            <td class="middle aligned"><el-button size="small" type="danger" @click="addAuth(item, index)">添加</el-button></td>
          </tr>
        </template>
          <template v-else>
          <tr>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>

    <!--已添加权限-->
    <div class="own-auth-wrap">
      <table class="ui celled structured table">
        <thead>
          <tr class="center aligned">
          <th >游戏</th>
          <th >平台</th>
          <th >大厅</th>
          <th >终端</th>
          <th >应用包</th>
          <th >APPID应用</th>
          <th colspan="2">权限内容</th>
          <th >业务审核人</th>
          <th >操作</th>
        </tr>
        </thead>
        <tbody>
          <template v-if="addedData.length > 0">
          <tr class="center bottom aligned"   v-for="(item, index) in addedData">
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.game">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.platform">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.hall">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.terminal">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.appPackage">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><span v-for="child in item.appid">{{child}}<br></span></td>
            <td class="middle aligned" style="line-height: 1rem;"><el-checkbox v-model="item.deliverRefund">发货退款</el-checkbox></td>
            <td class="middle aligned"><el-checkbox v-model="item.warningSetting">报警设置</el-checkbox></td>
            <td class="middle aligned">DJLXS</td>
            <td class="middle aligned"><el-button size="small" type="danger" @click="deleteAuth(item, index)">删除</el-button></td>
          </tr>
        </template>
          <template v-else>
          <tr>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned" style="line-height: 1rem;">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
            <td class="middle aligned">暂无数据</td>
          </tr>
        </template>
        </tbody>
      </table>
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
  import SelectAuth2 from 'components/SelectAuth/SelectAuth2';
  import SelectAuth3 from 'components/SelectAuth/SelectAuth3';
  export default {
    data () {
      return {
        moreContent: false,
        showFlag: true,
        waitingAdd: [{
          game: ['地方棋牌'],
          platform: ['四川'],
          hall: ['全部'],
          terminal: ['全部'],
          appPackage: ['全部'],
          appid: ['全部'],
          deliverRefund: true,
          warningSetting: false,
          auth: [{name: 'd', age: 20}],
          assessor: 'DJLXS(后台)'
        }],
        addedData: []
      };
    },
    components: {
      SelectAuth,
      SelectAuth2,
      SelectAuth3
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
        console.dir(_dataCache);
        this.waitingAdd.push(_dataCache);
      },
      addAuth (item, index) {
        // 设置两个复选框
        // 添加权限
        console.log(item);
        this.addedData.push(item);
        // 将预添加队列中的删除
        this.waitingAdd.splice(index, 1);
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
