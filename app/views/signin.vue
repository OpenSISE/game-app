<template lang="jade">
  #signin
    input(type="text", placeholder="username", v-model="username")
    input(type="password", placeholder="password", v-model="password")
    a(href="javascript:void(0)", v-on="click: signIn()") SignIn
</template>

<script>
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
