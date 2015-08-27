var config = require('../config')
  , request = require('superagent')
  , END_POINT = config.api.END_POINT

module.exports = {
  getShows: function(callback){
    // var programs = {
    //   lol: [
    //     {
    //       name: 'Randys Room',
    //       description: 'First Room playing LOL',
    //       show: true,
    //       rmtp: 'http://baidu.com'
    //     }
    //   ],
    //   hearthStone: [
    //     {
    //       name: 'Brain Room',
    //       description: 'Fcuk',
    //       show: true,
    //       rmtp: 'htp'
    //     }
    //   ]
    // }
    // callback(null,programs);
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
