<template>
    <div class='operate-auth-wrap'>
      <div class="head">
        <el-button type="success" class="go-back" size="small" @click="goBack">◁</el-button>
        <span class="role">角色：产品/运营人员(后台数据)</span>
      </div>

      <div class="select-auth">
       <SelectAuth></SelectAuth>
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
      <h4>已有操作权限列表：</h4>
      <hr>
      <div class="batch-oprate">
        <el-checkbox>全选</el-checkbox>
        <el-button size="small" type="primary">批量修改</el-button>
        <el-button size="small" type="danger" @click="confirmDel">批量删除</el-button>
      </div>
      <div class="search-input clearfix">
        <el-input placeholder="请输入关键字搜索" icon="search"></el-input>
      </div>
      <div class="own-auth-wrap">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column label="选项" align="center" width="100">
            <template scope="scope">
              <el-checkbox></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column label="游戏" prop="game" align="center" width="100"></el-table-column>
          <el-table-column label="平台" prop="platform" align="center" width="100"></el-table-column>
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
              <el-button size="small" type="primary">修改</el-button>
              <el-button size="small" type="danger" @click="confirmDel">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import SelectAuth from 'components/SelectAuth/SelectAuth';
  export default {
    data () {
      return {
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
    methods: {
      goBack () {
        this.$emit('hideOperateAuth');
      },
      confirmDel () {
        this.$confirm('确定删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('确定删除');
        }).catch(() => {
          console.log('放弃删除');
        });
      }
    },
    components: {
      SelectAuth
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .operate-auth-wrap
    .head, .select-auth
      margin-bottom: 20px
    .add-auth-wrap
      margin-bottom: 50px
    .batch-oprate, .search-input
      display: inline-block
      vertical-align :middle
    .search-input
      float: right
      margin-right: 30px
    .own-auth-wrap
      margin-top: 30px


</style>
