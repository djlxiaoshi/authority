<template>
  <div class='member-manager-wrap'>
    <div class="member-manager-head">
      <el-button type="success" class="go-back-btn" size="small" @click="goBack">◁</el-button>
      <span class="v-align-m">角色：产品/运营人员</span>
      <div class="operate-wrap">
        <div class="name-search">
          <span class="v-align-m">姓名搜索</span>
          <div class="search-wrap">
            <el-input placeholder="请输入内容"></el-input>
          </div>
        </div>
        <div class="select-status">
          <span class="v-align-m">选择状态</span>
          <el-select placeholder="请选择" v-model="value" class="v-align-m">
            <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="clearfix" style="float: right;">
          <el-button type="primary" size="small">批量添加</el-button>
          <el-button type="warning" size="small">批量取消</el-button>
          <el-checkbox>全选</el-checkbox>
        </div>
      </div>
    </div>
    <div class="">
      <el-table :data="memberMsgData" style="width: 100%" border>
        <el-table-column label="用户ID" align="center" prop="id" width="180"></el-table-column>
        <el-table-column label="英文名" align="center" prop="EnglishName" width="180"></el-table-column>
        <el-table-column label="中文名" align="center" prop="ChineseName" width="180"></el-table-column>
        <el-table-column label="所属部门" align="center" prop="department"></el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-checkbox>添加</el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '已添加'
        }, {
          value: '选项3',
          label: '未添加'
        }],
        memberMsgData: [{
          id: '1',
          EnglishName: 'John',
          ChineseName: 'DJL箫氏',
          department: '数据支付部'
        }, {
          id: '2',
          EnglishName: 'DJL.L',
          ChineseName: '小明',
          department: '设计部'
        }],
        value: ''
      };
    },
    methods: {
      goBack () {
        console.log(1);
        this.$emit('hideMemberMana');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/common.styl'
  .member-manager-wrap
    .member-manager-head
      margin-bottom: 30px
      .go-back-btn
        vertical-align :middle
      .operate-wrap
        margin-top: 30px
        .name-search
          display: inline-block
          .search-wrap
            display: inline-block
            width: 300px
            vertical-align: middle
        .select-status
          display: inline-block
          margin-left: 50px
</style>
