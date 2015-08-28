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
        if (err) {
          callback({
            message: '网络错误'
          })
        } else {
          switch (res.body.code) {
            case '200':
              callback(null,res.body)
              break;
            case '400':
              callback({
                message: '用户名或密码错误'
              })
              break;
          }
        }
      })
  },
  signUp: function(username,password, callback){
    request
      .post(END_POINT + '/user/signup')
      .send({
        username: username,
        password: password
      })
      .end(function(err,res){
        if (err) {
          callback({
            message: '网络错误'
          })
        } else {
          var error;
          switch (res.body.code) {
            case 11000:
              error = {
                code: 11000,
                message: '用户名已被占用'
              }
              break;
            case '200':
              error = null;
              break;
          }
          callback(error,res.body);
        }
      })
  },
  getUserInfo: function(username, callback){
    request
      .get(END_POINT + '/user/' + username)
      .end(function(err,res){
        if (err) {
          callback({
            message: '网络错误'
          })
        } else {
          switch (res.body.code) {
            case '200':
              callback(null,res.body);
              break;
            case '400':
              callback({
                message: '找不到用户'
              })
              break;
          }
        }
      })
  },
  update: function(username, room, callback){
    var token = localStorage.getItem('token');
    room.token = token;
    request
      .put(END_POINT + '/user/' + username)
      .send(room)
      .end(function(err,res){
        if (err) {
          callback({
            message: '网络错误'
          })
        } else {
          switch (res.body.code) {
            case '200':
              callback(null,res.body);
              break;
            case '401':
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              location.href = '/';
              break;
          }
        }
      })
  }
}
