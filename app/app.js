var Vue = require('Vue');

require('../static/bower_components/normalize.css/normalize.css');
require('../static/bower_components/pure/grids-min.css');
require('../static/styles/layout.scss');
require('../static/styles/index.scss');


var app = new Vue({
  el: '#app',
  data: {
    programs: []
  }
})

module.exports = app;
