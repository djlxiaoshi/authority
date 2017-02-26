<template>
  <div class="auth-application">
    权限申请页面
    <div class="applicant-msg">
      <h4>申请人</h4>
      <span class="applicant-name">姓名：杜思睿（AnneDu）（后台数据）</span>
      <span class="department">部门：（后台数据）</span>
    </div>
    <div class="authority">
      <h5>应用权限</h5>
      <p class="authority-text">
        支付后台APPID权限，会根据数据后台的BPID权限自动开通，如果没有某个应用的appid权限，请自行去data后台开通对应的bpid权限，如果在数据后台开通权限后，在支付后台还是提示无权限，请退出账号，清空浏览器缓存，重新登录一下即可查看；如果有疑问，请及时联系AnneDu，谢谢。</p>
    </div>
    <div class="view-content">
      <h5>查看内容</h5>
      <form action="">
        <label><input type="checkbox">订单查询</label>
        <label><input type="checkbox">欺诈订单</label>
        <label><input type="checkbox">统计信息</label>
        <a href="#" @click="showMore">》<span>更多内容</span></a>
        <div class="more-content" v-if="moreContent">
          <label><input type="checkbox" @click="showPrompt">产品配置</label>
          <label><input type="checkbox" @click="showPrompt">收入汇总</label>
          <label><input type="checkbox">应用警报设置</label>
          <label><input type="checkbox" @click="showPrompt">财务对账</label>
        </div>
      </form>
    </div>
    <div class="select-auth-wrap">
      <Select-auth></Select-auth>
    </div>

    <div role="dialog" id="myModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>您所申请的内容，将会转到对应的业务审核人审核，如果您申请的内容与自己的工作职责不符，将不会予以通过；请慎重申请，谢谢!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="hidePrompt">确定</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->

  </div>
</template>

<script type="text/ecmascript-6">
  import 'bootstrap/dist/css/bootstrap.css';
  import $ from 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap';
  import SelectAuth from 'components/SelectAuth/SelectAuth';
  export default {
    data () {
      return {
        moreContent: false
      };
    },
    components: {
      SelectAuth
    },
    methods: {
      showMore () {
        this.moreContent = !this.moreContent;
      },
      showPrompt ($event) {
        if ($event.target.checked) {
          $('#myModal').fadeIn(300);
        }
      },
      hidePrompt () {
        $('#myModal').fadeOut(200);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .auth-application
    position: relative;
    .more-content
      display: inline-block
  #myModal
    display: none
    position: fixed
    top:0
    bottom:0
    left:0
    right:0
    z-index :50
    background: rgba(128, 128, 128, 0.7)
    .modal-dialog
      position: absolute
      top:0
      bottom:0
      left:0
      right:0
      margin:auto

</style>
