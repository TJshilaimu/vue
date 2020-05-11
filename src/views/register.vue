<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号</span>
          <router-link :to="{naem: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" @input="input"></el-input>
          <div class="pw-strength">
            <div :class="['bar',passColor]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  import api from "@/api/index.js"
  export default {
    data() {
      var checkUser = (rule, value, callback) => {
        // console.log(value);
        let reg = /^[\da-zA-Z_]{4,16}$/;
        // let str ="12312ssss3a_"
        // console.log(reg.test(str))
        if (!value) {
          return callback(new Error('用户名不能为空'));
        } else if (value.length < 4 || value.length > 16) {
          callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
        } else if(!reg.test(value)){
          callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
        }else{
          callback();
        }
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   } else {
        //     if (value < 18) {
        //       callback(new Error('必须年满18岁'));
        //     } else {
        //       callback();
        //     }
        //   }
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        // console.log('123')
        let reg = /^[\da-zA-Z_]{4,16}$/;

        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(!reg.test(value)){
          callback(new Error('密码必须为6-16位的字母数字或下划线组成'));

        } else {
          if (this.ruleForm.rePassword !== '') {
            this.$refs.ruleForm.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        passColor: '',
        ruleForm: {
          password: '',
          rePassword: '',
          userName: ''
        },
        rules: {
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          rePassword: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
          userName: [{
            validator: checkUser,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.register({
              params:self.ruleForm,
            }).then( res => {
              console.log(res)
              if(res.data.status === 'success'){
                this.$router.push({name: 'login'})
              }else{
                alert(res.data.msg)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      input() {
        let regStr = /(\w)+/g;
        let regNum = /(\d)+/g;
        let reg = /_/;
        let stronge = this.ruleForm.password.match(regStr) && this.ruleForm.password.match(regNum) && this.ruleForm.password.match(reg);
        if (this.ruleForm.password.length > 20 || (this.ruleForm.password.length>6 && stronge)) {
          this.passColor = 'strong'
        } else if (this.ruleForm.password.length < 6) {
          this.passColor = 'week';
        } else if (!this.ruleForm.password) {
          this.passColor = '';
        } else {
          this.passColor = "normal"
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/css/register/index.scss";

</style>
