<template lang="jade">
  #chat
    .items(v-auto-scroll)
      .item(v-repeat="messages")
        a(href="/#/user/{{username}}").username {{username}}
        .content {{content}}
    .sender
      input.u-full-width(v-model="content", type="text", placeholder="按 Enter 发送", v-on="keyup:sendMessage | key 'enter'")
</template>

<script>

  module.exports = {
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
          this.messages.push({
            username: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : 'Guest',
            content: this.content
          })
          this.content = '';
        }
      }
    },
    compiled: function(){
      // setInterval(function(){
      //   this.messages.push({
      //     username: 'randy',
      //     content: 'fuck'
      //   })
      // }.bind(this),500)
    }
  }

</script>
