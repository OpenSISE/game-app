var Vue = require('Vue');

require('../static/bower_components/normalize.css/normalize.css');
require('../static/bower_components/pure/grids-min.css');
require('../static/styles/layout.scss');
require('../static/styles/index.scss');

var app = new Vue({
  el: '#app',
  data: {
    title: '', // landing title
    subTitle: '', // landing sub title
    shows: 'fuck'
  },
  filters: {
    gameName: require('./filters/gameName').gameName,
    gameSubName: require('./filters/gameName').gameSubName
  }
})


var controller = require('./controllers');
// init
controller.home.getEvent(function(err,event){
  app.title = event.title;
  app.subTitle = event.subTitle;
});

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
controller.home.getShows(function(err,shows){
  if (err) {
    console.log('err')
  } else {
    app.shows = shows;
  }
});



module.exports = app;
