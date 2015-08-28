<template lang="jade">
  #welcome(v-show="loading",v-transition="welcome", transition-mode="out-in")
    h1 SISE Game
    h2 让竞技不再孤单
  section#screen(v-show="!loading")
    #landing
      .main(v-text="title")
      .sub(v-text="subTitle")
    #live
  section#programs(v-repeat="shows", v-show="!loading")
    .program
      .title
        .main(v-text="$key | gameName")
        .sub(v-text="$key | gameSubName")
      .items.pure-g
        .pure-u-1-3(v-repeat="$value")
          .item
            .video
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
        loading: true
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
          }.bind(this), 3000)
        }
      }.bind(this));
    }
  }
</script>
