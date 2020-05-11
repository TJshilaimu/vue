<template>
<div class="m-hcity">
    <dl>
        <dt>{{title}}</dt>
        <dd v-for="item in hotList" :key="item.id">{{item.name}}</dd>   
    </dl>
</div>
</template>

<script>
   export default {
       props:['title','hotList']

 }
</script>

<style scoped lang="scss">
@import '@/assets/css/changeCity/hot.scss';
</style>