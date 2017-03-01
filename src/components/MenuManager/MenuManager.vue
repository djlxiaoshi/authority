<template>
    <div class='menu-manager-wrap'>
      <div class="menu-manager-head">
        <div class="operate-role">
          <el-button type="success" class="go-back" size="small" @click="goBack">◁</el-button>
          <span>角色：产品/运营人员</span>
        </div>
        <div class="operate-wrap">
          <el-cascader placeholder="试试搜索：指南" :options="options" filterable change-on-select style="vertical-align: middle"></el-cascader>
          <el-button type="primary" style="vertical-align: middle">查询</el-button>
          <div class="batch-operation clearfix" style="vertical-align: middle">
            <el-button type="primary" size="small">批量添加</el-button>
            <el-button type="warning" size="small">批量取消</el-button>
            <el-checkbox>全选</el-checkbox>
          </div>
        </div>
      </div>

      <div class="show-wrap">
        <el-table :data="memberManData" style="width: 100%" border>
          <el-table-column label="ID" align="center" prop="id"  width="180" ></el-table-column>
          <el-table-column label="所属项目" align="center" prop="project"  width="180" ></el-table-column>
          <el-table-column label="一级菜单" align="center" prop="firstLevelMenu"></el-table-column>
          <el-table-column label="二级菜单" align="center" prop="secondLevelMenu"></el-table-column>
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
        memberManData: [{
          id: '1',
          project: '权限管理',
          role: '杀手',
          department: '数据支付部',
          loginTime: '2017-02-28'
        }, {
          id: '2',
          name: 'DJL.L',
          firstLevelMenu: '一级菜单',
          secondLevelMenu: '二级菜单'
        }]
      };
    },
    methods: {
      goBack () {
        console.log(1);
        this.$emit('hideMenuManager');
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/css/common.styl'
  .menu-manager-wrap
    .operate-wrap
      margin: 30px 0
      .batch-operation
        float: right
    .go-back
      display: inline-block
</style>
