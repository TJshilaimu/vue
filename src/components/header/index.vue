<template>
<div class="m-header">
    <el-row>
        <top-bar></top-bar>
    </el-row>
    <el-row>
        <search-bar></search-bar>
    </el-row>
</div>
</template>

<script>
import topBar from './topBar.vue'
import searchBar from './searchBar.vue'
export default {
  components: {
    topBar,
    searchBar
  }

}
</script>

<style lang="scss">
    @import "@/assets/css/public/header/index.scss";
</style>
