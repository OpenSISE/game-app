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
        if (res.body.code === '200') {
          app.room.name = res.body.room.name;
          app.room.description = res.body.room.description;
          app.room.rtmp = res.body.room.rtmp;
        } else {
          alert('Error: ' + res.body.message);
        }
      })
    }
  }
</script>
