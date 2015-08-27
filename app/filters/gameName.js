var gameNameUtils = require('../utils/gameName');

exports.gameName = function(gameId){
  if(gameId) return gameNameUtils[gameId].name;
}

exports.gameSubName = function(gameId){
  if (gameId) {
    return gameNameUtils[gameId].subName;
  }
}
