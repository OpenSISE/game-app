module.exports = {
  getPrograms: function(callback){
    var programs = {
      lol: [
        {
          name: 'Randys Room',
          description: 'First Room playing LOL',
          show: true,
          rmtp: 'http://baidu.com'
        }
      ],
      hearthStone: [
        {
          name: 'Brain Room',
          description: 'Fcuk',
          show: true,
          rmtp: 'htp'
        }
      ]
    }
    callback(null,programs);
  }
}
