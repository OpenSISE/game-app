<template lang="jade">
  #user(v-if="signed && params.username===''")
    //- 自己的资料
    p(v-text="user.username")
    input(v-model="user.room.name")
    input(v-model="user.room.description")
    select(v-model="user.room.game", options="games")
    input#show(type="checkbox", v-model="user.room.show")
    label(for="show") 显示到首页
    a(href="javascript:void(0)", v-on="click: userUpdate()") 更新
  #user(v-if="!signed")
    //- 别人的资料
    p(v-text="user.username")
    p(v-text="user.room.name")
</template>

<script>
  var User = require('../models').User;
  module.exports = {
    props: ['params'],
    data: function(){
      return {
        signed: localStorage.getItem('token') && localStorage.getItem('token') !== '',
        user: {
          username: '',
          room: {
            name: '',
            description: '',
            game: '',
            show: false
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
      var app = this;
      if (app.params.username === '') {
        // 查看自己的资料
        if (app.signed) {
          User.getUserInfo(JSON.parse(localStorage.getItem('user')).username, function(err,res){
            if (err || !res.ok) {
              alert('Something wrong');
            } else {
              if (res.body.code === '200') {
                app.user.username = res.body.username;
                app.user.room = res.body.room;
              } else {
                // TODO 404
                alert('Invalid user');
              }
            }
          })
        } else {
          location.href="/";
        }
      } else {
        // 查看它人资料
        User.getUserInfo(app.params.username, function(err,res){
          if (err || !res.ok) {
            alert('Something wrong');
          } else {
            if (res.body.code === '200') {
              app.user.username = res.body.username;
              app.user.room = res.body.room;
            } else {
              // TODO 404
              alert('Invalid user');
            }
          }
        })
      }
    },
    methods: {
      userUpdate: function(){
        var app = this;
        User.update(app.user.username,{
          roomName: app.user.room.name,
          roomDescription: app.user.room.description,
          show: app.user.room.show,
          game: app.user.room.game
        }, function(err,res){
          if (res.body.code === '200') {
            alert('update success')
          } else {
            alert('error');
            console.log(res.body);
          }
        })
      }
    }
  }
</script>
