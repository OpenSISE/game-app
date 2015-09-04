<template lang="jade">
  .header
    a(href="#/home").logo SISE Game

    #toolbar(v-if="!signed")
      a(href="#/signin").item 登录
      a(href="#/signup").item 注册
    #toolbar(v-if="signed")
      a(href="#/user").item {{user.username}}
      a(href="#/signout").item 退出
  .view
    component(is="{{view}}", params="{{params}}", v-transition="fade",transition-mode="out-in")

  .footer &copy; 2015 OpenSISE Project
</template>

<script>
  require('../static/bower_components/normalize.css/normalize.css');
  require('../static/bower_components/pure/grids-min.css');
  require('../static/styles/layout.scss');

  module.exports = {
    el: '#app',
    data: {
      view: '',
      shows: {},
      signed: localStorage.getItem('token') && localStorage.getItem('token') !== '',
      params: {},
      user: {
        userId: '',
        username: ''
      }
    },
    compiled: function(){
      if(this.signed){
        this.user.userId = JSON.parse(localStorage.getItem('user')).id;
        this.user.username = JSON.parse(localStorage.getItem('user')).username;
      }
    },
    filters: {
      gameName: require('./filters/gameName').gameName,
      gameSubName: require('./filters/gameName').gameSubName
    },
    components: {
      'home-view': require('./views/home.vue'),
      'signin-view': require('./views/signin.vue'),
      'signup-view': require('./views/signup.vue'),
      'user-view': require('./views/user.vue'),
      'room-view': require('./views/room.vue')
    }
  }
</script>
