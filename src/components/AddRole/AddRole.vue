<template>
  <div class='add-role-wrap'>
    <div class="main-table">
      <el-row class="table-row">
        <el-col :span="24" class="add-role-title"><h4>添加角色</h4></el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="4">
          <span>角色</span>
        </el-col>
        <el-col :span="20">
          <el-input placeholder="请输入角色名称"></el-input>
        </el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="4">
          <span>菜单选择</span>
        </el-col>
        <el-col :span="20">
          <el-cascader expand-trigger="hover" :options="options"></el-cascader>
        </el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="4">
          <span>已选菜单</span>
        </el-col>
        <el-col :span="20">
          <el-table :data="roleData" border>
            <el-table-column prop="firstLevelMenu" label="一级菜单" align="center"></el-table-column>
            <el-table-column prop="secondLevelMenu" label="二级菜单" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template scope="scope">
                <el-button type="primary" size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row class="table-row">
        <el-col :span="4">
          <span>备注</span>
        </el-col>
        <el-col :span="20">
          <el-input type="textarea" :rows="7" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row style="text-align: center;">
        <el-col style="display: inline-block;">
          <el-button type="warning" @click="cancel">取消</el-button>
          <el-button type="primary">确定添加</el-button>
          <el-col :span="4">
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        roleData: [{
          firstLevelMenu: '订单查询',
          secondLevelMenu: '订单查询-查询'
        }]
      };
    },
    methods: {
      cancel () {
        this.$confirm('确定取消当前操作吗', '警告', {
          confirmButtonText: '确定'
        }).then(() => {
          this.$emit('hideAddRole');
        }).catch(() => {
          console.log('已取消当前操作');
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .add-role-wrap
    .main-table
      width: 730px
      margin: 50px auto
      padding: 20px
      border: 1px solid #e5e5e5
      .add-role-title
        padding: 5px
        background: #67C8FD
        text-align: center
      .table-row
        margin: 20px
</style>
