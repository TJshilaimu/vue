<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1589015776&di=5a8f5d9e93c0f7e90d2a8d3486be57e3&src=http://c.hiphotos.baidu.com/zhidao/pic/item/f3d3572c11dfa9ecc8a8866860d0f703908fc1cf.jpg"
          width="480" height="370" alt="美团网">
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">{{error}}</h4>
        <p>
          <span>
            账号登陆
          </span>
        </p>
        <el-input :class="{'error' : error && !userName}" v-model="userName" placeholder="手机号/用户名/邮箱"
          prefix-icon="profile"></el-input>
        <el-input :class="{'error' : error && !password}" v-model="password" type="password" placeholder="密码"
          prefix-icon="password"></el-input>
        <div class="foot">
          <a href="#">忘记密码?</a>
        </div>
        <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <a class="oauth__link oauth__link--qq" href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}" target="_blank"></a>
            <a class="oauth__link oauth__link--weibo" href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="">加入我们</a></li>
        <li><a href="">商家入驻</a></li>
        <li><a href="">帮助中心</a></li>
        <li><a href="">美团手机版</a></li>
      </ul>
      <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
  import api from "@/api/index.js"
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        error: ''
      }
    },
    methods: {

      submit() {
        if (this.userName === '') {
          this.error = "请输入用户名"
        }
        if (this.password === '') {
          this.error = "请输入密码"
        }
        api.login({
          params: {
            userName: this.userName,
            password: this.password
          }
        }).then(res => {
        //   console.log(res)
          if (res.data.status === 'success') {
            //    this.$router.push({name:'base'})
            this.$router.push({
              name: 'base'
            });
            this.$store.commit('setUserName',res.data.data)
            // console.log('123')
          } else {
            this.error = res.data.msg
          }
        })
      }
    }

  }
</script>

<style lang="scss">
  @import '@/assets/css/login/index.scss';

</style>
