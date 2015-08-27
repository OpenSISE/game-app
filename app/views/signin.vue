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
      }
    }
  }
</script>
