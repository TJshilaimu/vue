<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <category />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span = "5">
        map
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Crumbs from "@/components/detail/crumbs.vue"
  import category from "@/components/detail/category.vue"
  import list from "@/components/detail/list.vue"

  export default {
    components: {
      Crumbs,
      category,
      list
    }
  }
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';

</style>
