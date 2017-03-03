<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button @click="toggleSelected" class="please-select">--请选择--</el-button>
    <div class="select-box-wrap" id="select-box-wrap" v-show="showSelectAuthBox">
      <div class="box-header clearfix">
        <h5 class="box-title">应用选择器</h5>
        <div class="btn-wrap">
          <el-button type="primary" size="mini" @click="toggleSelected">确定</el-button>
          <el-button type="warning" size="mini" @click="clearAll">置空</el-button>
        </div>
      </div>
      <div class="box-body">
        <ul class="left-part">
          <li @click="switchMenu($event,0)" :class="{active: changeFlag === 0}"><a href="javascript:void(0)">请选择游戏</a>
          </li>
          <li @click="switchMenu($event,1)" :class="{active: changeFlag === 1}"><a href="javascript:void(0)">请选择平台</a>
          </li>
          <li @click="switchMenu($event,2)" :class="{active: changeFlag === 2}"><a href="javascript:void(0)">请选择大厅</a>
          </li>
          <li @click="switchMenu($event,3)" :class="{active: changeFlag === 3}"><a href="javascript:void(0)">请选择终端</a>
          </li>
          <li @click="switchMenu($event,4)" :class="{active: changeFlag === 4}"><a href="javascript:void(0)">请选择应用包</a>
          </li>
          <li @click="switchMenu($event,5)" :class="{active: changeFlag === 5}"><a href="javascript:void(0)">请选择APPID</a>
          </li>
        </ul>
        <div class="right-part">
          <div class="data-list">
            <div v-show="changeFlag === index" v-for="(item, index) in authSelect">
              <el-checkbox :indeterminate="isIndeterminate(index, serviceData[index])"
                           v-model="authSelect[index]['isAll']"
                           @change="handleCheckAllChange($event, serviceData[index], authSelect[index])">全选/全不选
              </el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search" v-model="input"></el-input>
              </div>
              <el-checkbox-group v-model="authSelect[index]['checked']"
                                 @change="handleCheckedCitiesChange(serviceData[index], authSelect[index])">
                <div v-for="item in serviceData[index]" v-show="result(item)">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const gameType = ['所有游戏', '德州扑克', '斗地主', '地方棋牌', '印尼棋牌', 'IPOKER', '四人斗地主', '三公', '麻将', '博定'];
  const platformType = ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台'];
  const hallType = ['三人厅', '四人厅', '五人厅', '六人厅', '七人厅', '八人厅', '九人厅', '十人厅', '更大厅'];
  const terminalType = ['所有终端', 'IOS', 'PC', 'ANDRIOD'];
  const appPackageType = ['所有应用包', '360', '新浪', '腾讯'];
  const appidType = ['所有APPID', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）', '德州扑克-ANDROID-主版本-简体（1499）', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）'];

  export default {
    data () {
      return {
        input: '',
        changeFlag: 0,
        showSelectAuthBox: false,
        serviceData: [gameType, platformType, hallType, terminalType, appPackageType, appidType],
        authSelect: [
          {
            'checked': [],
            'isAll': false
          },
          {
            'checked': [],
            'isAll': false
          },
          {
            'checked': [],
            'isAll': false
          },
          {
            'checked': [],
            'isAll': false
          },
          {
            'checked': [],
            'isAll': false
          },
          {
            'checked': [],
            'isAll': false
          }
        ]
      };
    },
    methods: {
      toggleSelected () {
        this.showSelectAuthBox = !this.showSelectAuthBox;
      },
      switchMenu ($event, num) {
        $event.target.style.background = 'lightgreeen';
        this.changeFlag = num;
        this.input = '';
      },
      handleCheckAllChange ($event, selectType, authItem) {
        authItem['checked'] = $event.target.checked ? selectType : [];
      },
      handleCheckedCitiesChange (selectType, authItem) {
        let checkedCount = authItem['checked'].length;
        authItem['isAll'] = checkedCount === selectType.length;
//        清空输入框，便于直接输入
        this.input = '';
      },
      result (item) {
        return !this.input.trim() || item.toUpperCase().indexOf(this.input.trim().toUpperCase()) > -1;
      },
      clearAll () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.alert('确定置空');
        }).catch(() => {
          window.alert('放弃置空');
        });
      },
      isIndeterminate (index, selecType) {
        return this.authSelect[index]['checked']['length'] > 0 && this.authSelect[index]['checked']['length'] < selecType.length;
      }
    },
    computed: {},
    props: ['parentRouter']
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/common.styl"
  .select-application
    position: relative
    .please-select
      display: inline-block
      width: 200px
      text-align: center
      color: black
      border-right: 1px solid #e5e5e5
      &:hover
        text-decoration: none
    .select-box-wrap
      position: absolute
      top: 50px
      z-index: 20
      background: #ffffff
      border: 5px solid #e5e5e5
      border-radius: 5px
      .box-header
        background: #0099CC
        line-height: 14px
        padding: 10px
        .box-title
          float: left
          margin: 0
          font-weight: 700
          font-size: 14px
        .btn-wrap
          float: right
      .box-body
        .left-part
          display: inline-block
          height: 100%
          text-align: center
          vertical-align: top
          border-right: 5px solid #e5e5e5
          padding-bottom: 20px
          li
            padding: 10px
        .right-part
          display: inline-block
          height: 100%
          width: 400px
          vertical-align: top
          padding: 10px 20px
          .select-auth-input
            margin: 10px 0
          .data-list
            padding-right: 20px
            height: 215px
            overflow: auto
    .active
      background: lightsalmon
</style>
