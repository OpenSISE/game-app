var config = require('../config')
  , request = require('superagent')
  , END_POINT = config.api.END_POINT

module.exports = {
  getShows: function(callback){
    request
      .get(END_POINT + '/show')
      .end(function(err, response){
        if (err) {
          callback(err);
        } else {
          callback(err, response.body)
        }
      })
  }
}
