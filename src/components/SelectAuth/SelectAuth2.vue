<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button @click="toggleSelected" class="please-select">--请选择--</el-button>
    <div class="select-box-wrap" id="select-box-wrap" v-show="showSelectAuthBox">
      <div class="box-header clearfix">
        <h5 class="box-title">应用选择器</h5>
        <div class="btn-wrap">
          <el-button type="primary" size="mini">确定</el-button>
          <el-button type="warning" size="mini">置空</el-button>
        </div>
      </div>
      <div class="box-body">
        <ul class="left-part">
          <li @click="switchMenu($event,1)" :class="{active: changeFlag === 1}"><a href="javascript:void(0)">请选择游戏</a>
          </li>
          <li @click="switchMenu($event,2)" :class="{active: changeFlag === 2}"><a href="javascript:void(0)">请选择平台</a>
          </li>
          <li @click="switchMenu($event,3)" :class="{active: changeFlag === 3}"><a href="javascript:void(0)">请选择大厅</a>
          </li>
          <li @click="switchMenu($event,4)" :class="{active: changeFlag === 4}"><a href="javascript:void(0)">请选择终端</a>
          </li>
          <li @click="switchMenu($event,5)" :class="{active: changeFlag === 5}"><a href="javascript:void(0)">请选择应用包</a>
          </li>
          <li @click="switchMenu($event,6)" :class="{active: changeFlag === 6}"><a
            href="javascript:void(0)">请选择APPID</a>
          </li>
        </ul>
        <div class="right-part">
          <div class="data-list">
            <div v-show="changeFlag === 1">
              <el-checkbox :indeterminate="gameTypeChecked.length > 0 && gameTypeChecked.length < gameType.length" v-model="gameAll"
                           @change="handleCheckAllChange($event, 'gameType', 'gameTypeChecked')">全选/全不选
              </el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>
              <el-checkbox-group v-model="gameTypeChecked"
                                 @change="handleCheckedCitiesChange('gameType', 'gameTypeChecked', 'gameAll')">
                <div v-for="item in gameType">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <div v-show="changeFlag === 2">
              <el-checkbox class="" :indeterminate="platformTypeChecked.length > 0 && platformTypeChecked.length < platformType.length" v-model="platformAll"
                           @change="handleCheckAllChange($event, 'platformType', 'platformTypeChecked')">全选/全不选
              </el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>
              <el-checkbox-group v-model="platformTypeChecked"
                                 @change="handleCheckedCitiesChange('platformType', 'platformTypeChecked', 'platformAll')">
                <div v-for="item in platformType">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <div v-show="changeFlag === 3">
              <el-checkbox :indeterminate="hallTypeChecked.length > 0 && hallTypeChecked.length < hallType.length" v-model="hallAll"
                           @change="handleCheckAllChange($event, 'hallType', 'hallTypeChecked')">全选/全不选</el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>

              <el-checkbox-group v-model="hallTypeChecked"
                                 @change="handleCheckedCitiesChange('hallType', 'hallTypeChecked', 'hallAll')">
                <div v-for="item in hallType">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <div v-show="changeFlag === 4">
              <el-checkbox :indeterminate="terminalTypeChecked.length > 0 && terminalTypeChecked.length < terminalType.length" v-model="terminalAll"
                           @change="handleCheckAllChange($event, 'terminalType', 'terminalTypeChecked')">全选/全不选</el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>
              <el-checkbox-group v-model="terminalTypeChecked"
                                 @change="handleCheckedCitiesChange('terminalType', 'terminalTypeChecked', 'terminalAll')">
                <div v-for="item in terminalType">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <div v-show="changeFlag === 5">
              <el-checkbox :indeterminate="appPackageTypeChecked.length > 0 && appPackageTypeChecked.length < appPackageType.length" v-model="appPackageAll"
                           @change="handleCheckAllChange($event, 'appPackageType', 'appPackageTypeChecked')">全选/全不选</el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>
              <el-checkbox-group v-model="appPackageTypeChecked"
                                 @change="handleCheckedCitiesChange('appPackageType', 'appPackageTypeChecked', 'appPackageAll')">
                <div v-for="item in appPackageType">
                  <el-checkbox :label="item"></el-checkbox>
                </div>
              </el-checkbox-group>
            </div>

            <div v-show="changeFlag === 6">
              <el-checkbox :indeterminate="appidTypeChecked.length > 0 && appidTypeChecked.length < appidType.length" v-model="appidAll"
                           @change="handleCheckAllChange($event, 'appidType', 'appidTypeChecked')">全选/全不选</el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search"></el-input>
              </div>
              <el-checkbox-group v-model="appidTypeChecked"
                                 @change="handleCheckedCitiesChange('appidType', 'appidTypeChecked', 'appidAll')">
                <div v-for="item in appidType">
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
//  const gameType = ['所有游戏', '德州扑克', '斗地主', '地方棋牌', '印尼棋牌', 'IPOKER', '四人斗地主', '三公', '麻将', '博定'];
//  const platformType = ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台'];
//  const hallType = ['三人厅', '四人厅', '五人厅', '六人厅', '七人厅', '八人厅', '九人厅', '十人厅', '更大厅'];
//  const terminalType = ['所有终端', 'IOS', 'PC', 'ANDRIOD'];
//  const appPackageType = ['所有应用包', '360', '新浪', '腾讯'];
//  const appidType = ['所有APPID', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）', '德州扑克-ANDROID-主版本-简体（1499）', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）'];
  export default {
    data () {
      return {
        changeFlag: 1,
        isIndeterminate: false,
        showSelectAuthBox: false,
        gameType: ['所有游戏', '德州扑克', '斗地主', '地方棋牌', '印尼棋牌', 'IPOKER', '四人斗地主', '三公', '麻将', '博定'],
        platformType: ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台'],
        hallType: ['三人厅', '四人厅', '五人厅', '六人厅', '七人厅', '八人厅', '九人厅', '十人厅', '更大厅'],
        terminalType: ['所有终端', 'IOS', 'PC', 'ANDRIOD'],
        appPackageType: ['所有应用包', '360', '新浪', '腾讯'],
        appidType: ['所有APPID', '德州扑克-PC-新浪微博-简体（3737）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）', '德州扑克-ANDROID-主版本-简体（1499）', '德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1546）', '德州扑克-ANDROID-华为联运-简体（1547）'],
        gameTypeChecked: [],
        platformTypeChecked: [],
        hallTypeChecked: [],
        terminalTypeChecked: [],
        appPackageTypeChecked: [],
        appidTypeChecked: [],
//        是否点击全选标志位
        gameAll: false,
        platformAll: false,
        hallAll: false,
        terminalAll: false,
        appPackageAll: false,
        appidAll: false
      };
    },
    methods: {
      toggleSelected () {
        this.showSelectAuthBox = !this.showSelectAuthBox;
      },
      switchMenu ($event, num) {
        $event.target.style.background = 'lightgreeen';
        this.changeFlag = num;
        console.log(this.changeFlag);
      },
      handleCheckAllChange ($event, selectType, checkedType) {
        console.log(selectType);
        this[checkedType] = $event.target.checked ? this[selectType] : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange (selectType, checkedType, isAll) {
        let checkedCount = this[checkedType].length;
        this[isAll] = checkedCount === this[selectType].length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this[selectType].length;
      }
    },
    watch: {
      'gameTypeChecked' () {
        console.log('监听');
        console.log(this.gameTypeChecked);
      }
    },
    computed () {

    },
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
