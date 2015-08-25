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
    programs: []
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

controller.home.getPrograms(function(err,programs){
  if (err) {
    console.log('err')
  } else {
    app.programs = programs;
  }
});

module.exports = app;
