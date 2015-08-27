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

router.configure({
  notfound: function(){
    router.setRoute('/home');
  }
})

router.init('/home');

// var controller = require('./controllers');
// init
// controller.home.getEvent(function(err,event){
//   app.title = event.title;
//   app.subTitle = event.subTitle;
// });

// var shows = {
//   lol: [
//     {
//       "_id": "55deb8faf3e62ccaecef548e",
//       "room": {
//         "game": "lol",
//         "name": "Randy's Room",
//         "show": true,
//         "description": ""
//       }
//     }
//   ],
//   unset: [
//     {
//       "_id": "55dedad7761b55dd20bf933b",
//       "room": {
//         "name": "djyde520's Room",
//         "description": "No description",
//         "game": "unset",
//         "show": true
//       }
//     }
//   ]
// }
// app.shows = shows
// controller.home.getShows(function(err,shows){
//   if (err) {
//     console.log('err')
//   } else {
//     app.shows = shows;
//   }
// });



module.exports = app;
