<template lang="jade">
#room-container
  #info
    h2 {{room.name}}
    span by {{$route.params.username}}
  #video
    object(v-attr="data: playerSWF", style="z-index:1 !important; position: static")
      param(name="flashvars", value="src={{room.rtmp}}&autoHideControlBar=true&streamType=live&autoPlay=true&verbose=true")
      param(name="allowfullscreen", value="true")
  Chat(room="{{$route.params.username}}")
  #description
    h4 房间简介
    #text {{room.description}}
</template>

<script>
  var User = require('../models').User;


  module.exports = {
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
    route: {
      activate: function(transition){
        transition.next();
      }
    },
    compiled: function(){
      User.getUserInfo(this.$route.params.username, function(err,res){
        if (err) {
          alert(err.message);
        } else {
          this.room.name = res.room.name;
          this.room.description = res.room.description;
          this.room.rtmp = res.room.rtmp;
        }
      }.bind(this))
    },
    components: {
      Chat: require('../components/Chat/Chat.vue')
    }
  }
</script>
