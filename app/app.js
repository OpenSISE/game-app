var Vue = require('Vue')
  , Router = require('../static/bower_components/director/build/director.min.js').Router
  , router = new Router()

var app = new Vue(require('./app.vue'));

router.on('/home', function(){
  app.view = 'home-view'
})

router.on('/room/:username', function(username){
  app.view = 'room-view';
  app.params.username = username;
})

router.on('/user', function(){
  app.view = 'user-view';
  app.params.username = '';
})

router.on('/user/:username', function(username){
  app.view = 'user-view';
  app.params.username = username;
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
