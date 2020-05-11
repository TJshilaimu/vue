<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu></m-menu>
      </el-col>
      <el-col :span="19">
        <m-life></m-life>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="iStyle"></m-container>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <m-container :navList="recomment"></m-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import MLife from '@/components/index/life.vue'
  import mMenu from '@/components/index/menu.vue'
  import mContainer from '@/components/index/container.vue'

  export default {
    components: {
      MLife,
      mMenu,
      mContainer
    },
    data(){
      return {
        iStyle: {
          class: 'istyle',
          title: '有格调',
          list: [{
            text: '全部',
            tab: 'all'
          }, {
            text: '约会聚餐',
            tab: 'food'
          }, {
            text: '丽人SPA',
            tab: 'spa'
          }, {
            text: '电影演出',
            tab: 'movie'
          }, {
            text: '品质出游',
            tab: 'travel'
          }]
        },
        recomment: {
          class: 'youhui',
          title: '很优惠',
          list: [{
            text: '全部',
            tab: 'all'
          }, {
            text: '美食',
            tab: 'food'
          }, {
            text: '休闲',
            tab: 'xiuxian'
          }]
        },
      }
    }

  }
</script>

<style lang="scss">
    @import "@/assets/css/index/index.scss";

</style>
