var Vue = require('Vue')
  , Router = require('../static/bower_components/director/build/director.min.js').Router
  , router = new Router()

var app = new Vue(require('./app.vue'));

router.on('/home', function(){
  app.view = 'home-view'
})

router.on('/room/:id', function(id){
  app.view = 'room-view';
  app.params.roomId = id;
})

router.on('/user/:id', function(id){
  app.view = 'user-view';
  app.params.userId = id;
})

router.on('/signin', function(){
  app.view = 'signin-view';
})

router.on('/signup', function(){
  app.view = 'signup-view';
})

router.on('/signout', function(){
  if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.href = '/';
  } else {
    location.href = '/';
  }
})

router.configure({
  notfound: function(){
    router.setRoute('/home');
  }
})

router.init('/home');

module.exports = app;
