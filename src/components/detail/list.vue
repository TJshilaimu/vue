<template>
  <div class="m-products-list">
    <ul>
        <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
<el-row>
    <m-item v-for="item in productionList" :list="item"></m-item>
</el-row>
  </div>
</template>

<script>
  import MItem from "./item.vue"
  import api from "@/api/index.js"
  export default {
    components: {
      MItem,
    },
    created(){
      api.getGoodList().then(res => {
        console.log(res)
        this.productionList = res.data.data
      })
    },
    data() {
      return {
          productionList:[],
        nav: [{
            key: "s-default",
            name: "智能排序",
            active: true
          },
          {
            key: "s-price",
            name: "价格最低",
            active: false
          },
          {
            key: "s-score",
            name: "人气最高",
            active: false
          },
          {
            key: "s-comment",
            name: "评价最高",
            active: false
          }
        ],
      }
    }

  }
</script>

<style scoped>

</style>
