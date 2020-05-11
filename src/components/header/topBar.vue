<template>
<div class="m-header-topbar m-header">
    <el-col :span='10'>
        <geo />
    </el-col>
    <el-col :span='14'>
        <m-nav></m-nav>
    </el-col>
</div>
</template>

<script>
import Geo from './geo.vue'
import MNav from './nav.vue'
export default {
  components: {
    Geo,
    MNav
  }

}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/topbar.scss";

</style>
