<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="5" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" @click="$router.push('/')" alt="美团" title="首页">
      </el-col>
      <el-col :span="19" class="center">
        <div class="wrapper">
          <el-input placeholder="请输入内容" v-model="searchWord" @focus="showHot" @blur="hideHot" @input="search"></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <dl class="hotPlace" v-if="isHot">
            <dt>热门搜索</dt>
            <dd v-for="item in searchList">
              <router-link :to="{path:'/s'}">{{item}}</router-link>
            </dd>
          </dl>
          <!-- 搜索结果 -->
          <dl class="searchList" v-if="showSearch">
            <router-link tag="dd" :to="{path:'/detail'}" v-for="item in hotList">
              <span>{{item}}</span>
            </router-link>
            <!-- v-for="item in hotList">
              <router-link :to="{path:'/detail'}">{{item}}</router-link>
            </router> -->
          </dl>
        </div>
        <div class="suggest">
          <router-link to="/x" v-for="item in lateList">{{item}}</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import api from "@/api/index.js"

  export default {
    data() {
      return {
        hot: false,
        searchWord: '',
        searchList: ['美食', '谷歌', '股票'],
        hotList: [],
        lateList: []
      }
    },
    created() {

api.getHotSearch().then(res => {
// console.log(res)
this.lateList = res.data.data
})    },
    computed: {
      isHot() {
        return this.hot && !this.searchWord
      },
      showSearch() {
        return this.hot && this.searchWord
      }
    },
    methods: {
      // changeHome(){
      //   // console.log('12')
      //   this.$router.push('/');
      //   // console.log('1')
      // },
      showHot() {
        this.hot = true
      },
      hideHot() {
        let self = this
        setTimeout(function () {
          self.hot = false
          //   console.log('2')
        }, 300)
      },
      search(){
        let val = this.searchWord;
        api.getSearchList().then(res => {
        this.hotList = res.data.data.list.filter((item,index) => {
          return item.indexOf(val)> -1;
        })
      })
      }

    }

  }
</script>

<style lang="scss">
  @import "@/assets/css/public/header/search.scss";

</style>
