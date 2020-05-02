<template>
  <div id="app">
    <div class="head">
      <div class="logo" @click="toHome">渡一</div>
      <ul class="nav">
        <router-link to="/home" tag="li">首页</router-link>
        <router-link to="/about" tag="li">关于</router-link>
        <router-link to="/activity" tag="li">活动</router-link>
        <router-link to="/movie" tag="li">电影页</router-link>
        <span>你好：</span>
        <span v-if="!$store.state.loginFlag" class="login" @click="changeLogin">请登录</span>
        <span v-else>{{$store.state.user.name}}
          <span @click="clear" class="login">&nbsp;退出</span>

        </span>
      </ul> 
    </div>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    
    beforeRouteEnter(to,from,next){
      if(to.path === '/movie'){
       
      }
    },
    methods:{
      clear(){
        localStorage.removeItem('id');
        this.$router.push('/home');

      },
      toHome(){
        if(this.$route.path === '/home'){
          return ; 
        }
          this.$router.push('/home')
        // console.log(this.$route)
      },
      changeLogin(){
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  .login{
    cursor: pointer;
  }
  .head{
    width:100%;
    height:60px;
    line-height:60px;
    background-color:aqua;
    display: flex;
    justify-content: space-between;
  }
  .logo{
    margin-left:80px;
    cursor: pointer;
  }
.nav{
  display:flex;
  justify-content: space-around;
  margin-right:66px;
}
.nav li{
  margin-right:30px;
  cursor: pointer;
}
.active{
  color:#eee;
}
.show{
  margin:30px;
}

</style>
