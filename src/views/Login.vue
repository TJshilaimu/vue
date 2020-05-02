<template>
<div class="login">
    <p>
        <label for="name">
            姓名：<input type="text" v-model="name" placeholder="请输入姓名" id="name">
        </label>
    </p>
   <p>
    <label for="pwd">密码：</label>
    <input type="password" v-model="pwd" placeholder="密码" id="pwd">
   </p>
    
    <button @click="handleClick">登录</button>
</div>
</template>

<script>
   export default {
       data(){
           return {
               name:'',
               pwd:null
           }
       },
       methods:{
           handleClick(){
               if(this.$store.state.user.name == this.name && this.$store.state.user.pwd == this.pwd){
                   this.$store.state.loginFlag = true;
                   localStorage.setItem('id',true);
                   this.$router.push('/');
               }else{
                   alert('cuowu');
                   this.name='';
                   this.pwd=null;
               }

            // if(this.$store.state.user.name == this.name && this.$store.state.user.pwd == this.pwd){
            //        this.$store.state.loginFlag = true;
            //        document.cookie('id',true);
            //        this.$router.push('/');
            //    }else{
            //        alert('cuowu');
            //        this.name='';
            //        this.pwd=null;
            //    }
           }
       }

 }
</script>

<style scoped>
    p{
        margin:30px;
    }

</style>