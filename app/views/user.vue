<template lang="jade">
#user.form
  h4 Hola, {{user.username}} :)
  a.button.u-full-width(v-link="/room/{{user.username}}" ) 进入我的房间
  .row
    .six.columns
      label(for="room-name") 直播名称
      input.u-full-width#room-name(v-model="user.room.name", type="text")
    .six.columns
      label(for="games") 直播类别
      select.u-full-width#games(v-model="user.room.game", options="games")
    label(for="rtmp") RTMP 地址
    input.u-full-width#rtmp(v-model="user.room.rtmp", type="text")
    label(for="room-description") 直播简介
    textarea.u-full-width#room-description(v-model="user.room.description")
    label
      input#show(type="checkbox", v-model="user.room.show")
      span.label-body 在首页显示房间
    input.button-primary(href="javascript:void(0)", v-on="click: userUpdate()", type="button", value="更新")
</template>

<script>
  require('../../static/bower_components/skeleton/css/skeleton.css');

  var User = require('../models').User;
  module.exports = {
    data: function(){
      return {
        signed: localStorage.getItem('token') && localStorage.getItem('token') !== '',
        user: {
          username: '',
          room: {
            name: '',
            description: '',
            game: '',
            show: false,
            rtmp: ''
          }
        },
        games: [
          {
            text: '英雄联盟',
            value: 'lol'
          },
          {
            text: '炉石传说',
            value: 'hearthStone'
          },
          {
            text: 'DotA',
            value: 'dota'
          },
          {
            text: '其它',
            value: 'unset'
          }
        ]
      }
    },
    compiled: function(){
      if (this.signed) {
        User.getUserInfo(JSON.parse(localStorage.getItem('user')).username, function(err,res){
          if (err) {
            alert(err.message);
          } else {
            this.user.username = res.username;
            this.user.room = res.room;
          }
        }.bind(this))
      } else {
        location.href="/";
      }
    },
    methods: {
      userUpdate: function(){
        var app = this;
        User.update(app.user.username,{
          room: this.user.room
        }, function(err,res){
          if (err) {
            alert(err.message);
          } else {
            alert('修改成功');
          }
        })
      }
    }
  }
</script>
