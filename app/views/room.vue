<template lang="jade">
  #room-container
    #info
      h2 {{room.name}}
      span by {{params.username}}
    #video
      object(v-attr="data: playerSWF", style="z-index:1 !important; position: static")
        param(name="flashvars", value="src={{room.rtmp}}&autoHideControlBar=true&streamType=live&autoPlay=false&verbose=true")
    Chat(room="{{params.username}}")
    #description
      h4 房间简介
      #text {{room.description}}
</template>

<script>
  var User = require('../models').User;
  module.exports = {
    props: ['params'],

    data: function(){
      return {
        playerSWF: require("../../static/swfs/StrobeMediaPlayback.swf"),
        room: {
          name: '',
          description: '',
          rtmp: ''
        }
      }
    },
    compiled: function(){
      var app = this;
      User.getUserInfo(app.params.username, function(err,res){
        if (err) {
          alert(err.message);
        } else {
          app.room.name = res.room.name;
          app.room.description = res.room.description;
          app.room.rtmp = res.room.rtmp;
        }
      })
    },
    components: {
      Chat: require('../components/Chat/Chat.vue')
    }
  }
</script>
