<template lang="jade">
  #signin.form
    h4 加入 SISE Game
    .row
      label(for="username") 用户名
      input.u-full-width#username(type="text", placeholder="用以显示和登录", v-model="username")
      label(for="password") 密码
      input.u-full-width#password(type="password", v-model="password")
      label(for="comfirm-password") 确认密码
      input.u-full-width#comfirm-password(type="password", v-model="comfirmPassword")
      input.button-primary.u-full-width.button-primary(type="button", href="javascript:void(0)", v-on="click: signUp()", value="加入")
</template>

<script>
  var User = require('../models').User;
  module.exports = {
    data: function(){
      return {
        username: '',
        password: '',
        comfirmPassword: '',
        valid: false
      }
    },
    methods: {
      signUp: function(){
        var app = this;
        app.valid = this.username !== '' && this.comfirmPassword !== '' && this.password !== '' && this.comfirmPassword === this.password;
        if (app.valid) {
          User.signUp(app.username, app.password, function(err,res){
            if (err) {
              alert(err.message);
            } else {
              localStorage.setItem('token',res.token);
              localStorage.setItem('user', JSON.stringify(res.user));
              location.href = '/';
            }
          })
        } else {
          alert('填写信息错误')
        }
      }
    }
  }
</script>
