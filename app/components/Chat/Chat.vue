<template lang="jade">
#chat
  .items
    #status(v-class="success: socketStatus === 1, failed: socketStatus === 2") 实时聊天{{socketStatusMessage[socketStatus]}}
    .item(v-repeat="messages")
      .username {{username}}
      .content {{content}}
  .sender
    input.u-full-width(v-model="content", type="text", placeholder="按 Enter 发送", v-on="keyup:sendMessage | key 'enter'")
</template>

<script>

  var io = require('socket.io-client');

  module.exports = {
    props: ['room'],
    data: function(){
      return {
        content: '',
        messages: [],
        socketStatusMessage: ['连接中','连接成功', '连接失败'],
        socketStatus: 0 // 0.connecting 1.success 2.failed
      }
    },
    watch: {
      messages: function(val,oldVal){
        this.$el.childNodes[0].scrollTop = this.$el.childNodes[0].scrollHeight
      }
    },
    methods: {
      sendMessage: function(){
        // 过滤空格
        var space = /\s+/;
        this.content = this.content.replace(space, '');

        if (this.content !== '') {
          var message = {
            room: this.room,
            username: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : 'Guest',
            content: this.content
          }

          var socket = io(':5535', {'multiplex': false});
          socket.emit('chat', message);
          this.content = '';
        }
      }
    },
    compiled: function(){
      // https://github.com/socketio/socket.io-client/issues/700
      var socket = io(':5535', {'multiplex': false});

      socket.on('connect', function(){
        this.socketStatus = 1;
        socket.emit('join', {
          room: this.room
        });

        socket.on('chat', function(msg){
          this.messages.push(msg);
        }.bind(this))
      }.bind(this))

      socket.on('connect_error', function(){
        this.socketStatus = 2;
        socket.disconnect();
      }.bind(this))
    },
    beforeDestroy: function(){

    }
  }

</script>
