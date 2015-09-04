<template lang="jade">
  #welcome(v-show="loading",v-transition="welcome", transition-mode="out-in")
    h1 SISE Game
    h2 让竞技不再孤单
  section#screen(v-show="!loading")
    #landing
      .main(v-text="title")
      .sub(v-text="subTitle")
    #live
      object(v-attr="data: playerSWF", style="z-index:1 !important")
        param(name="flashvars", value="src=rtmp://transfer.kan.games.sina.com.cn/sinagame/U1649937881_1440830226&autoHideControlBar=true&streamType=live&autoPlay=false&verbose=true")
  section#programs(v-repeat="shows", v-show="!loading")
    .program
      .title
        .main(v-text="$key | gameName")
        .sub(v-text="$key | gameSubName")
      .items.pure-g
        .pure-u-1-3(v-repeat="$value")
          .item
            a(href="#/room/{{ username }}").video
              object(v-attr="data: playerSWF")
                param(name="flashvars", value="src=rtmp://transfer.kan.games.sina.com.cn/sinagame/U1649937881_1440830226&autoHideControlBar=true&streamType=live&autoPlay=false&verbose=true")
            a(href="#/room/{{ username }}", v-text="room.name").name
</template>

<script>
  var Show = require('../models').Show;
  module.exports = {
    data: function(){
      return {
        title: 'TGC vs ECG',
        subTitle: '正在直播：第二届华软杯 - 英雄联盟四强',
        shows: {},
        loading: true,
        playerSWF: require("../../static/swfs/StrobeMediaPlayback.swf"),
        eventUrl: 'rtmp://172.16.162.46:1935/live'
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
    }
  }
</script>
