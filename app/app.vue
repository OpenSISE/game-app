<template lang="jade">
  .header
    a(href="/").logo SISE Game

    #toolbar
      a(href="/user/sign").item 登录
      a(href="/user/sign").item 注册
  .container
    component(is="{{view}}", params="{{params}}, keep-alive")
  .footer
</template>

<script>
  require('../static/bower_components/normalize.css/normalize.css');
  require('../static/bower_components/pure/grids-min.css');
  require('../static/styles/layout.scss');
  require('../static/styles/index.scss');

  module.exports = {
    el: '#app',
    data: {
      view: '',
      title: '', // landing title
      subTitle: '', // landing sub title
      shows: {}
    },
    filters: {
      gameName: require('./filters/gameName').gameName,
      gameSubName: require('./filters/gameName').gameSubName
    },
    components: {
      'home-view': require('./views/home.vue')
    }
  }
</script>
<!--
<style lang="css!scss">
</style> -->
