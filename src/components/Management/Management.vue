<template>
  <div class='auth-manage'>
    <el-tabs v-model="activeName">
      <el-tab-pane label="角色管理" name="first">
        <div class="role-manage-head">
          角色:
          <el-input placeholder="请输入角色" class="role-input"></el-input>
          成员:
          <el-input placeholder="请输入成员名称" class="member-input"></el-input>
          <el-button type="primary">查询</el-button>
          <el-button type="primary" size="small" class="clearfix add-role" @click="showAddRole">+添加角色</el-button>
        </div>

        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column prop="id" label="角色ID" width="180" align="center"></el-table-column>
          <el-table-column prop="role" label="角色" width="180" align="center"></el-table-column>
          <el-table-column label="菜单管理" align="center">
            <template scope="scope">
              <el-button type="primary" size="mini" @click="showManagerMenu">菜单管理</el-button>
            </template>
          </el-table-column>
          <el-table-column label="成员管理" align="center">
            <template scope="scope">
              <el-button type="primary" size="mini" @click="showManagerMember">成员管理</el-button>
            </template>
          </el-table-column>
          <el-table-column label="已选菜单" prop="selectedMenu" align="center"></el-table-column>
          <el-table-column label="备注" prop="remarks" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template scope="scope">
              <el-button type="primary" size="mini" @click="showAddRole">修改</el-button>
              <el-button type="danger" size="mini" @click="del">删除</el-button>
            </template>
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="成员管理" name="second">
        <el-table :data="memberManData" style="width: 100%" border>
          <el-table-column prop="id" label="用户ID" width="180" align="center"></el-table-column>
          <el-table-column prop="name" label="用户姓名" width="180" align="center"></el-table-column>
          <el-table-column label="用户角色" align="center" prop="role"></el-table-column>
          <el-table-column label="所属部门" align="center" prop="department"></el-table-column>
          <el-table-column label="最后登录时间" prop="loginTime" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template scope="scope">
              <el-button type="primary" size="mini" @click="showAuthList">应用权限</el-button>
              <el-button type="primary" size="mini" @click="showManagerMenu">查看内容</el-button>
              <el-button type="primary" size="mini" @click="showOperateAuth">操作权限</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <div class="menu-manager-comp-wrap" v-show="showMenuManagerFlag">
      <MenuManager v-on:hideMenuManager="hideMenuManager"></MenuManager>
    </div>

    <div class="member-manager-comp-wrap" v-show="showMemberManaFlag">
      <MemberManager v-on:hideMemberMana="hideMemberMana"></MemberManager>
    </div>

    <div class="add-role-comp-wrap" v-show="showAddRoleFlag">
      <AddRole @hideAddRole="hideAddRole"></AddRole>
    </div>

    <div class="view-auth-comp-wrap" v-show="showAuthListFlag">
      <ViewAuth @hideAuthList="hideAuthList"></ViewAuth>
    </div>

    <div class="operate-auth-comp-wrap" v-show="showOperateAuthFlag">
      <OperateAuth @hideOperateAuth="hideOperateAuth"></OperateAuth>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuManager from 'components/MenuManager/MenuManager';
  import MemberManager from 'components/MemberManager/MemberManager';
  import AddRole from 'components/AddRole/AddRole';
  import ViewAuth from 'components/ViewAuth/ViewAuth';
  import OperateAuth from 'components/OperateAuth/OperateAuth';
  export default {
    data () {
      return {
        activeName: 'first',
        showMenuManagerFlag: false,
        showMemberManaFlag: false,
        showAddRoleFlag: false,
        showAuthListFlag: false,
        showOperateAuthFlag: false,
        tableData: [{
          id: '1',
          role: '玩家',
          selectedMenu: ['菜单1', '菜单2', '菜单3', '菜单4'],
          remarks: '这是一些备注'
        }, {
          id: '2',
          role: '玩家2',
          selectedMenu: ['菜单1', '菜单2', '菜单3', '菜单4'],
          remarks: '这是一些备注2'
        }],
        memberManData: [{
          id: '1',
          name: 'DJLXS',
          role: '杀手',
          department: '数据支付部',
          loginTime: '2017-02-28'
        }, {
          id: '2',
          name: 'DJL.L',
          role: '左手',
          department: '数据支付部',
          loginTime: '2017-02-28'
        }]
      };
    },
    components: {
      MenuManager,
      MemberManager,
      AddRole,
      ViewAuth,
      OperateAuth
    },
    methods: {
      showManagerMenu () {
        this.showMenuManagerFlag = true;
      },
      showManagerMember () {
        this.showMemberManaFlag = true;
      },
      hideMenuManager () {
        this.showMenuManagerFlag = false;
      },
      hideMemberMana () {
        this.showMemberManaFlag = false;
      },
      showAddRole () {
        this.showAddRoleFlag = true;
      },
      hideAddRole () {
        this.showAddRoleFlag = false;
      },
      showAuthList () {
        this.showAuthListFlag = true;
      },
      hideAuthList () {
        this.showAuthListFlag = false;
      },
      showOperateAuth () {
        this.showOperateAuthFlag = true;
      },
      hideOperateAuth () {
        this.showOperateAuthFlag = false;
      },
      del () {
        this.$confirm('确定删除当前项吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('删除');
        }).catch(() => {
          console.log('取消');
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.styl"
  .auth-manage
    position: relative
    .role-manage-head
      margin-bottom: 20px
      .role-input, .member-input
        width: 200px
        display: inline-block
        margin-right: 30px
      .add-role
        float: right
    .add-role-comp-wrap, .view-auth-comp-wrap, .operate-auth-comp-wrap
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      z-index: 50
      background: #ffffff
</style>
