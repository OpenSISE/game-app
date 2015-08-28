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
  },
  getUserInfo: function(username, callback){
    request
      .get(END_POINT + '/user/' + username)
      .end(function(err,res){
        callback(err,res);
      })
  },
  update: function(username, room, callback){
    var token = localStorage.getItem('token');
    room.token = token;
    request
      .put(END_POINT + '/user/' + username)
      .send(room)
      .end(function(err,res){
        callback(err,res);
      })
  }
}
