<template>
    <el-container class="layout-default">
        <el-header height=''>
          <m-header></m-header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer height=''>
            <m-footer></m-footer>
        </el-footer>
      </el-container>
</template>

<script>
import MHeader from '@/components/header/index.vue'
import mFooter from '@/components/footer/index.vue'
export default {
  components: {
    MHeader,
    mFooter
  }

}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss';

</style>
