<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="hideDetail">
      <dt>全部分类</dt>
      <dd @mouseenter="showDetail(item)" v-for="item in navList">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="tip in curDetail.items">
        <h4>{{tip.title}}</h4>
        <span v-for="myItem in tip.items">{{myItem}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from "@/api/index.js"
  export default {
    data() {
      return {
        curDetail: null,
        timer: '',
        navList:['美食','娱乐','电影','服装']
    }
    },
    created(){
      api.getNavList().then(res => {
        // console.log(res);
        this.navList = res.data.data
      })

    },
    methods: {
      showDetail(item) {
        this.curDetail = item;
      },
      hideDetail() {

        let self = this;
        this.timer = setTimeout(function () {
          self.curDetail = null;
        }, 200)
      },
      detailEnter() {
        clearTimeout(this.timer)
      },
      detailLeave() {
        this.curDetail = null;
      }
    }

  }
</script>

<style scoped>

</style>
