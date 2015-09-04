<template lang="jade">
  #chat
    .items
      .item(v-repeat="messages")
        a(href="/#/user/{{username}}").username {{username}}
        .content {{content}}
    .sender
      input.u-full-width(v-model="content", type="text", placeholder="按 Enter 发送", v-on="keyup:sendMessage | key 'enter'")
</template>

<script>


  module.exports = {
    props: ['room'],
    data: function(){
      return {
        content: '',
        messages: []
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
          socket.emit('chat', message);
          this.messages.push(message);
          this.content = '';
        }
      }
    },
    created: function(){
      console.log('Chat created');
    },
    compiled: function(){
      socket.on('connect', function(){
        console.log(this.room);
        socket.emit('join', {
          room: this.room
        });

        socket.on('chat', function(msg){
          console.log(msg);
          this.messages.push(msg);
        }.bind(this))
      }.bind(this))
    },
    attached: function(){



      // setInterval(function(){
      //   this.messages.push({
      //     username: 'randy',
      //     content: 'fuck'
      //   })
      // }.bind(this),500)
    }
  }

</script>
