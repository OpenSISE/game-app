var models = require('../models')
  , Event = models.Event
  , User = models.User
  , Program = models.Program

var methods = {

  getEvent: function(callback){
    // get the game events info
    Event.getEvent(function(err,event){
      callback(null,event);
    })
  },

  getPrograms: function(callback){
    Program.getPrograms(function(err,programs){
      callback(err,programs);
    })
  }
}

module.exports = methods;
