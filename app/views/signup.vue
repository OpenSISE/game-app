<template lang="jade">
  #signin
    input(type="text", placeholder="username", v-model="username")
    input(type="password", placeholder="password", v-model="password")
    input(type="password", placeholder="comfirmPassword", v-model="comfirmPassword")
    a(href="javascript:void(0)", v-on="click: signUp()") Signup
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
            if (res.ok) {
              if (res.body.code === '400') {
                alert('Invalid username or password')
              } else if(res.body.code === '200'){
                localStorage.setItem('token', res.body.token);
                localStorage.setItem('user', JSON.stringify(res.body.user));
                location.href = '/';
              }
            } else {
              alert('something wrong');
            }
          })
        } else {
          alert('填写信息错误')
        }
      }
    }
  }
</script>
