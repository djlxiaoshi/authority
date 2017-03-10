<template>
  <div class="select-application">
    <span class="">操作权限</span>
    <el-button @click="toggleSelected" class="please-select">--请选择--</el-button>
    <div class="select-box-wrap" id="select-box-wrap" v-show="showSelectAuthBox">
      <div class="box-header clearfix">
        <h5 class="box-title">应用选择器</h5>
        <div class="btn-wrap">
          <el-button type="primary" size="mini" @click="addSelect">确定</el-button>
          <el-button type="warning" size="mini" @click="clearAll">置空</el-button>
        </div>
      </div>
      <div class="box-body">
        <ul class="left-part">
          <li @click="switchMenu($event,index)" :class="{active: changeFlag === index}" v-for="(item, index) in menuData"><a href="javascript:void(0)">{{item.menuName}}{{index}}</a>
          </li>
          <!--<li @click="switchMenu($event,1)" :class="{active: changeFlag === 1}"><a href="javascript:void(0)">请选择平台</a>-->
          <!--</li>-->
          <!--<li @click="switchMenu($event,2)" :class="{active: changeFlag === 2}"><a href="javascript:void(0)">请选择大厅</a>-->
          <!--</li>-->
          <!--<li @click="switchMenu($event,3)" :class="{active: changeFlag === 3}"><a href="javascript:void(0)">请选择终端</a>-->
          <!--</li>-->
          <!--<li @click="switchMenu($event,4)" :class="{active: changeFlag === 4}"><a href="javascript:void(0)">请选择应用包</a>-->
          <!--</li>-->
          <!--<li @click="switchMenu($event,5)" :class="{active: changeFlag === 5}"><a-->
            <!--href="javascript:void(0)">请选择APPID</a>-->
          <!--</li>-->
        </ul>
        <div class="right-part">
          <div class="data-list">
            <div v-show="changeFlag === index" v-for="(item, index) in authSelect">
              <el-checkbox :indeterminate="isIndeterminate(index, serviceData)"
                           v-model="authSelect[index]['isAll']"
                           @change="handleCheckAllChange($event, serviceData, authSelect[index])">全选/全不选
              </el-checkbox>
              <div class="select-auth-input">
                <el-input placeholder="请输入关键词" icon="search" v-model="input"></el-input>
              </div>
              <el-checkbox-group v-model="authSelect[index]['checked']"
                                 @change="handleCheckedCitiesChange(serviceData, authSelect[index])">
                <div v-for="item in serviceData" v-show="result(item)">
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
  //  const gameType = ['德州扑克', '斗地主', '地方棋牌', '印尼棋牌', 'IPOKER', '四人斗地主', '三公', '麻将', '博定'];
  //  const platformType = ['全国平台', '湖北平台', '四川平台', '深圳平台', '广东平台', '海南平台', '澳门平台', '宜宾平台', '宜昌平台', '其他平台'];
  //  const hallType = ['三人厅', '四人厅', '五人厅', '六人厅', '七人厅', '八人厅', '九人厅', '十人厅', '更大厅'];
  //  const terminalType = ['IOS', 'PC', 'ANDRIOD'];
  //  const appPackageType = ['360', '新浪', '腾讯'];
  //  const appidType = ['德州扑克-PC-新浪微博-简体（1232）', '德州扑克-ANDROID-VIVO联运-简体（1333）', '德州扑克-ANDROID-华为联运-简体（1235）', '德州扑克-ANDROID-主版本-简体（1499）', '德州扑克-PC-新浪微博-简体（1432）', '德州扑克-ANDROID-VIVO联运-简体（1353）', '德州扑克-ANDROID-华为联运-简体（1455）'];
  // import {deepClone} from 'common/js/utils';
  // import _u from 'underscore';
  export default {
    data () {
      return {
        input: '',
        changeFlag: 0,
        showSelectAuthBox: false,
        serviceData: [],
        menuData: {},
        // 通过上级选择后的筛选信息
        filterMsg: {},
        lastFilterMsg: false,
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
        let _this = this;
        let typeLists = ['game', 'platform', 'hall', 'terminal', 'appPackage', 'appid'];

        $event.target.style.background = 'lightgreeen';
        this.changeFlag = num;
        this.input = '';

        // 携带查询数据,在这里是可以判断数据是否变化
        this.authSelect.forEach((value, index) => {
          if (value.checked.length) {
            console.log(typeLists[index]);
            _this['filterMsg'][typeLists[index]] = value;
          }
        });

        console.log('打印选择器需要传到后台的数据');
        console.dir(_this['filterMsg']);

        // 后台获取数据
        this.$http.get(`/api/serviceData?index=${num}`).then(response => {
          console.dir(response.body.data);
          this.serviceData = response.body.data;
        }, response => {
          // error callback
        });
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
        this.$confirm('确定要清空所有吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.authSelect.forEach((item) => {
            item['checked'] = [];
            item['isAll'] = false;
          });
        }).catch(() => {
        });
      },
      isIndeterminate (index, selecType) {
        return this.authSelect[index]['checked']['length'] > 0 && this.authSelect[index]['checked']['length'] < selecType.length;
      },
      addSelect () {
        // 判断是否填写完整
        let _msg = ['游戏', '平台', '大厅', '终端', '应用包', 'APPID'];
        let _data = this.authSelect;
        for (let index = 0; index < _data.length; index++) {
          if (_data[index]['checked'].length === 0) {
            this.$message({
              message: `请至少选择一种${_msg[index]}`,
              type: 'warning'
            });
            return;
          }
        }
        // 触发父组件事件
        this.$emit('addSelData', this.authSelect);
        // 所有复选框复位
//        _data.forEach((item) => {
//          item['checked'] = [];
//          item['isAll'] = false;
//        });
        // 关闭权限选择框
        this.showSelectAuthBox = !this.showSelectAuthBox;
      }
    },
    computed: {},
    props: ['parentRouter'],
    created () {
      // 发送ajax请求，后台提取数据
      this.$http.get('/api/serviceData?index=0').then(response => {
        this.serviceData = response.body.data;
      }, response => {
        // error callback
      });

      // 发送ajax请求，获取菜单选项
      this.$http.get('/api/menuData').then(response => {
        this.menuData = response.body.data;
      }, response => {
        // error callback
      });
    },
    watch: {
    }
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
