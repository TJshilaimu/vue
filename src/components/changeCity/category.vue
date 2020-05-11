<template>
<div class="category">
    <dl class="m-categroy">
        <dt>按拼音首字母搜索</dt>
        <dd v-for="item in list">
            <a :href=" '#city-' + item">{{item}}</a>
        </dd>
    </dl>
    <dl class="m-categroy-section" v-for = "(val,key) in cityGroup" :key="key" :id=" 'city-' + key">
        <dt>{{key}}</dt>
        <dd v-for="item in val">
            <span>{{item.name}}</span>
        </dd>
    </dl>

</div>
</template>

<script>
    import api from '@/api/index.js'
   export default {
       data(){
           return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup:{}
           }
       },
       created(){
           api.getCityList().then(res => {
               let obj = {};
               res.data.data.forEach((item,index) => {
                  if(!obj[item.firstChar.toUpperCase()]){
                      obj[item.firstChar.toUpperCase()] = [];
                  }
                  obj[item.firstChar.toUpperCase()].push(item);
               })
               this.cityGroup = obj;
           })
       }
 }
</script>

<style lang="scss">
@import '@/assets/css/changecity/categroy.scss';
</style>