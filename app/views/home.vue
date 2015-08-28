<template lang="jade">
  section#screen
    #landing
      .main(v-text="title")
      .sub(v-text="subTitle")
    #live
  section#programs(v-repeat="shows")
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
        shows: {}
      }
    },

    compiled: function(){
      Show.getShows(function(err,shows){
        if (err) {
          console.log('err')
        } else {
          this.shows = shows;
        }
      }.bind(this));
    }
  }
</script>
