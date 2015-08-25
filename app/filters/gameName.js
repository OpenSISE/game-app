var gameNameUtils = require('../utils/gameName');

exports.gameName = function(gameId){
  return gameNameUtils[gameId].name;
}

exports.gameSubName = function(gameId){
  return gameNameUtils[gameId].subName;
}
