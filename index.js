var clients, _findBy;

clients = require('./clients.json');

_findBy = function(type, value, returnVersion) {
  value = value.toUpperCase();
  for(var version in clients) {
    var client = clients[version];
    if(Array.isArray(client)) {
      for(var rev in client) {
        if(client[rev][type] == value) {
          return (returnVersion) ? version : true;
        }
      }
    } else {
      if(client[type] == value) {
        return (returnVersion) ? version : true;
      }
    }
  }

  return false;
};

module.exports = {

  getSignatureByVersion: function(version) {
    return (version in clients) ? clients[version] : false;
  },

  getVersionBySprSignature: function(value) {
    return _findBy('spr', value, true);
  },

  getVersionByDatSignature: function(value) {
    return _findBy('dat', value, true);
  },

  isValidSprSignature: function(value) {
    return _findBy('spr', value);
  },

  isValidDatSignature: function(value) {
    return _findBy('dat', value);
  },

};
