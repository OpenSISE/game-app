var methods = {
  getEvent: function(callback){
    var event = {
      title: 'ECG vs TCG',
      subTitle: '华软杯英雄联盟四强'
    }
    callback(null,event);
  }
}

module.exports = methods;
