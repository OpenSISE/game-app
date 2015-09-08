<template lang="jade">
#welcome(v-show="loading",v-transition="welcome", transition-mode="out-in")
  h1 SISE Game
  h2 让竞技不再孤单
section#screen(v-show="!loading")
  #landing(v-if="event.username")
    .main(v-text="event.title")
    .sub
      a(v-link="/room/{{event.username}}") 正在直播：{{event.subTitle}}
  #landing(v-if="!event.username")
    #count
      span(style="font-size: 2.4em;") {{userCount}}
      span 个华软玩家在 SISE Game 分享快乐
  #live(v-if="event.username")
    object(v-attr="data: playerSWF", style="z-index:1 !important")
      param(name="allowfullscreen", value="true")
      param(name="flashvars", value="src={{event.rtmp}}&autoHideControlBar=true&streamType=live&autoPlay=true")

#main-message(v-if="showsCount === 0") 当前无直播

section#programs(v-repeat="shows", v-show="!loading")
  .program
    .title
      .main(v-text="$key | gameName")
      .sub(v-text="$key | gameSubName")
    .items.pure-g
      .pure-u-1-3(v-repeat="$value")
        .item
          a(v-link="room/{{ username }}").video
            object(v-attr="data: playerSWF")
              param(name="flashvars", value="src={{ room.rtmp }}&autoHideControlBar=true&streamType=live&autoPlay=true&playButtonOverlay=false&muted=true")
          a(v-link="room/{{ username }}", v-text="room.name").name
</template>

<script>
  var Show = require('../models').Show;
  var User = require('../models').User;
  module.exports = {
    data: function(){
      return {
        userCount: 0,
        event: {
          username: '',
          title: '',
          subTitle: '',
          rtmp: 'rtmp://172.16.162.46:1935/live'
        },
        shows: {},
        loading: true,
        playerSWF: require("../../static/swfs/StrobeMediaPlayback.swf"),
      }
    },
    computed: {
      showsCount: function(){
        return Object.keys(this.shows).length;
      }
    },
    compiled: function(){
      Show.getShows(function(err,shows){
        if (err) {
          console.log('err')
        } else {
          this.shows = shows;
          setTimeout(function(){
            this.loading = false
          }.bind(this), 1200)
        }
      }.bind(this));

      Show.getEvent(function(err,event){
        if (err) {
          console.log(err);
        } else {
          if (event !== null) {
            this.event.title = event.room.screenTitle;
            this.event.subTitle = event.room.screenSubTitle;
            this.event.rtmp = event.room.rtmp;
            this.event.username = event.username;
          } else {
            User.count(function(err,res){
              if (err) {
                alert(err.message);
              } else {
                this.userCount = res.count;
              }
            }.bind(this))
          }
        }
      }.bind(this))
    }
  }
</script>
