<template>
<div class="activity">
  <div class="navList">
    <router-link tag="li" :to="{'name':'studentList'}">学生列表</router-link>
    <router-link tag="li" :to="{'name':'studentQuestion'}">学生疑问</router-link>
  </div>
   <router-view></router-view>
</div>
</template>

<script>
   export default {

 }
</script>

<style scoped>
.navList li{
  list-style:none;
  background-color:bisque;
  display:inline-block;
  padding:10px 20px;
  margin-left:20px;
  cursor: pointer;
}
.active{
  color:#fff;
}
</style>