<template lang="jade">
  #signin.form
    //- form
    h4 登录
    .row
      label(for="username") 用户名
      input.u-full-width#username(type="text", v-model="username")
      label(for="password") 密码
      input.u-full-width#password(type="password", v-model="password")
    input.u-full-width.button-primary(type="button", v-on="click: signIn()", value="登录")
</template>

<script>
  require('../../static/bower_components/skeleton/css/skeleton.css');

  var User = require('../models').User;
  module.exports = {
    data: function(){
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      signIn: function(){
        User.signIn(this.username, this.password, function(err,res){
          if (err) {
            alert(err.message);
          } else {
            localStorage.setItem('token',res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            location.href = '/';
          }
        })
      }
    }
  }
</script>
