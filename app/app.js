var Vue = require('vue')
  , VueRouter = require('vue-router')
//   , Router = require('director').Router
//   , router = new Router()
//

Vue.use(VueRouter);

var app = Vue.extend(require('./app.vue'));

var router = new VueRouter();

router.map({
  '/': {
    component: require('./views/home.vue')
  },
  '/room/:username': {
    component: require('./views/room.vue')
  },
  '/user': {
    component: require('./views/user.vue')
  },
  '/user/:username': {
    component: require('./views/user.vue')
  },
  '/signin': {
    component: require('./views/signin.vue')
  },
  '/signup': {
    component: require('./views/signup.vue')
  }
})

router.redirect({
  '*': '/home'
})

router.start(app, '#app');
//
// router.on('/home', function(){
//   app.view = 'home-view'
// })
//
// router.on('/room/:username', function(username){
//   app.view = 'room-view';
//   app.params.username = username;
// })
//
// router.on('/user', function(){
//   app.view = 'user-view';
//   app.params.username = '';
// })
//
// router.on('/user/:username', function(username){
//   app.view = 'user-view';
//   app.params.username = username;
// })
//
// router.on('/signin', function(){
//   app.view = 'signin-view';
// })
//
// router.on('/signup', function(){
//   app.view = 'signup-view';
// })
//
// router.on('/signout', function(){
//   if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     location.href = '/';
//   } else {
//     location.href = '/';
//   }
// })
//
// router.configure({
//   notfound: function(){
//     router.setRoute('/home');
//   }
// })
//
// router.init('/home');
//
// module.exports = app;
