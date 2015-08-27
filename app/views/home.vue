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
            a(href="javascript:void(0)", v-text="room.name").name
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
      var that = this;
      Show.getShows(function(err,shows){
        if (err) {
          console.log('err')
        } else {
          that.shows = shows;
        }
      });
    }
  }
  // var home = function(){
  //   return {
  //     data: {
  //       shows: {}
  //     }
  //   }
  // }
  //
  // module.exports = home;
</script>
