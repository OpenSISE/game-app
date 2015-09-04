var Vue = require('vue')
  , VueRouter = require('vue-router')
//   , Router = require('director').Router
//   , router = new Router()
//

Vue.use(VueRouter);

var app = Vue.extend(require('./app.vue'));

var router = new VueRouter({
  saveScrollPosition: false
});

router.map({
  '*': {
    component: require('./views/404.vue')
  },
  '/': {
    component: require('./views/home.vue')
  },
  '/room/:username': {
    component: require('./views/room.vue')
  },
  '/user': {
    component: require('./views/user.vue')
  },
  '/signin': {
    component: require('./views/signin.vue')
  },
  '/signup': {
    component: require('./views/signup.vue')
  },
  '/signout': {
    component: {
      created: function(){
        if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          location.href="/";
        } else {
          location.href="/";
        }
      }
    }
  }
})

router.redirect({
  '*': '/home'
})

router.start(app, '#app');
