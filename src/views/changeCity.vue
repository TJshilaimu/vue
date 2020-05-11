<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot-city title='热门城市' :hotList="hotList" />
    </el-row>

    <el-row>
      <hot-city title='最近访问' :hotList="lateList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
  import province from '@/components/changeCity/province.vue'
  import hotCity from '@/components/changeCity/hotCity.vue'
  import category from '@/components/changeCity/category.vue'
  import api from '@/api/index.js'

  export default {
    data() {
      return {
        hotList: [],
        lateList: []
      }
    },
    components: {
      province,
      hotCity,
      category
    },
    created() {
      api.getHotCity().then(res => {
        // console.log(res)
        this.hotList = res.data.data
      })
      api.getLateCity().then(res => {
        this.lateList = res.data.data;
      })
    }

  }
</script>

<style lang="scss">
  @import "@/assets/css/changeCity/iselect.scss";

</style>
