<template lang="jade">
  p {{room.name}}
  p {{room.description}}
</template>

<script>
  var User = require('../models').User;
  module.exports = {
    props: ['params'],

    data: function(){
      return {
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
    }
  }
</script>
