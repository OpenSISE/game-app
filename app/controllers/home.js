var models = require('../models')
  , Event = models.Event
  , User = models.User
  , Show = models.Show

var methods = {

  getEvent: function(callback){
    // get the game events info
    Event.getEvent(function(err,event){
      callback(null,event);
    })
  },

  getShows: function(callback){
    Show.getShows(function(err,shows){
      callback(err,shows);
    })
  }
}

module.exports = methods;
