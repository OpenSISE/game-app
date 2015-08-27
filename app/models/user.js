var config = require('../config')
  , request = require('superagent')
  , END_POINT = config.api.END_POINT

module.exports = {
  signIn: function(username,password,callback){
    request
      .post(END_POINT + '/user/signin')
      .send({
        username: username,
        password: password
      })
      .end(function(err,res){
        callback(err,res);
      })
  }
}
