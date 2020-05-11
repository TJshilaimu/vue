<template>
<div class="m-geo">
    <div class="position">
        <i class="el-icon-location"></i>
        <!-- <span>{{ $store.state.position !== '' ? $store.state.position : '北京'}}</span> -->
        <span>{{ $store.state.position}}</span>
        <router-link to="/changeCity">切换城市</router-link>
        [
        <a href="/" v-for="item in cityDetail.nearCity">{{item.name + ' '}}</a>
        ]
    </div>
    <div class="m-user" v-if="!$store.state.userName">
        <router-link :to="{name: 'login'}">立即登录</router-link>
        <router-link to="/blank/register">注册</router-link>
    </div>
</div>
</template>
<script>
    // import { mapMutations } from 'vuex'
    import api from "@/api/index.js"
export default {
    data(){
        return {
            cityDetail:{}
        }
    },
    created(){
        api.getPosition().then( res => {
            console.log(res)
            this.cityDetail = res.data.data;
            this.$store.state.position = this.cityDetail.name
        })
    }

   }
</script>

<style scoped lang='scss'>

</style>
