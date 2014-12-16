var clients, _findBy;

clients = {
  710: {
   dat: '3DFF4B2A',
   spr: '3DFF4AEB',
   otb: 0
  },
  730: {
   dat: '411A6233',
   spr: '411A6279',
   otb: 0
  },
  740: {
   dat: '41BF619C',
   spr: '41B9EA86',
   otb: 1
  },
  750: {
   dat: '42F81973',
   spr: '42F81949',
   otb: 1
  },
  755: {
   dat: '437B2B8F',
   spr: '434F9CDE',
   otb: 2
  },
  760: {
   dat: '439D5A33',
   spr: '439852BE',
   otb: 3
  },
  770: {
   dat: '439D5A33',
   spr: '439852BE',
   otb: 3
  },
  780: {
   dat: '44CE4743',
   spr: '44CE4206',
   otb: 4
  },
  790: {
   dat: '457D854E',
   spr: '457957C8',
   otb: 5
  },
  792: {
   dat: '459E7B73',
   spr: '45880FE8',
   otb: 6
  },
  800: {
   dat: '467FD7E6',
   spr: '467F9E74',
   otb: 7
  },
  810: {
   dat: '475D3747',
   spr: '475D0B01',
   otb: 8
  },
  811: {
   dat: '47F60E37',
   spr: '47EBB9B2',
   otb: 9
  },
  820: {
   dat: '486905AA',
   spr: '4868ECC9',
   otb: 10
  },
  830: {
   dat: '48DA1FB6',
   spr: '48C8E712',
   otb: 11
  },
  840: {
   dat: '493D607A',
   spr: '493D4E7C',
   otb: 12
  },
  841: {
   dat: '49B7CC19',
   spr: '49B140EA',
   otb: 13
  },
  842: {
   dat: '49C233C9',
   spr: '49B140EA',
   otb: 14
  },
  850: [{
   dat: '4A49C5EB',
   spr: '4A44FD4E',
   otb: 15
  }, {
   dat: '4A4CC0DC',
   spr: '4A44FD4E',
   otb: 15
  }, {
   dat: '4AE97492',
   spr: '4ACB5230',
   otb: 15
  }],
  852: {
   dat: '4A4CC0DC',
   spr: '4A44FD4E',
   otb: 0
  },
  853: {
   dat: '4AE97492',
   spr: '4ACB5230',
   otb: 0
  },
  854: [{
   dat: '4B1E2CAA',
   spr: '4B1E2C87',
   otb: 16
  }, {
   dat: '4B0D46A9',
   spr: '4B0D3AFF',
   otb: 16
  }, {
   dat: '475D3747',
   spr: '5750B01E',
   otb: 16
  }, {
   dat: '4B28B89E',
   spr: '4B1E2C87',
   otb: 17
  }],
  855: {
   dat: '4B98FF53',
   spr: '4B913871',
   otb: 18
  },
  860: [{
   dat: '4C28B721',
   spr: '4C220594',
   otb: 19
  }, {
   dat: '4C2C7993',
   spr: '4C220594',
   otb: 20
  }],
  861: {
   dat: '4C6A4CBC',
   spr: '4C63F145',
   otb: 21
  },
  862: {
   dat: '4C973450',
   spr: '4C63F145',
   otb: 22
  },
  870: {
   dat: '4CFE22C5',
   spr: '4CFD078A',
   otb: 23
  },
  871: {
   dat: '4D41979E',
   spr: '4D3D65D0',
   otb: 24
  },
  872: {
   dat: '4DAD1A1A',
   spr: '4DAD1A32',
   otb: 25
  },
  900: {
   dat: '4DBAA20B',
   spr: '4DAD1A32',
   otb: 27
  },
  910: {
   dat: '4E12DAFF',
   spr: '4E12DB27',
   otb: 28
  },
  920: {
   dat: '4E807C08',
   spr: '4E807C23',
   otb: 29
  },
  940: {
   dat: '4EE71DE5',
   spr: '4EE71E06',
   otb: 30
  },
  944: [{
   dat: '4F0EEFBB',
   spr: '4F0EEFEF',
   otb: 31
  }, {
   dat: '4F105168',
   spr: '4F1051D7',
   otb: 32
  }, {
   dat: '4F16C0D7',
   spr: '4F1051D7',
   otb: 33
  }, {
   dat: '4F3131CF',
   spr: '4F3131F6',
   otb: 34
  }],
  946: {
   dat: '4F75B7AB',
   spr: '4F5DCEF7',
   otb: 35
  },
  950: {
   dat: '4F75B7AB',
   spr: '4F75B7CD',
   otb: 36
  },
  952: {
   dat: '4F857F6C',
   spr: '4F857F8E',
   otb: 37
  },
  953: {
   dat: '4FA11252',
   spr: '4FA11282',
   otb: 38
  },
  954: {
   dat: '4FD5956B',
   spr: '4FD595B7',
   otb: 39
  },
  960: {
   dat: '4FFA74CC',
   spr: '4FFA74F9',
   otb: 40
  },
  961: {
   dat: '50226F9D',
   spr: '50226FBD',
   otb: 41
  },
  963: {
   dat: '503CB933',
   spr: '503CB954',
   otb: 42
  },
  970: {
   dat: '5072A490',
   spr: '5072A567',
   otb: 43
  },
  980: {
   dat: '50C70674',
   spr: '50C70753',
   otb: 44
  },
  981: {
   dat: '50D1C5B6',
   spr: '50D1C685',
   otb: 45
  },
  982: {
   dat: '512CAD09',
   spr: '512CAD68',
   otb: 46
  },
  983: {
   dat: '51407B67',
   spr: '51407BC7',
   otb: 47
  },
  985: {
   dat: '51641A1B',
   spr: '51641A84',
   otb: 48
  },
  986: {
   dat: '5170E904',
   spr: '5170E96F',
   otb: 49
  },
  1010: {
   dat: '51E3F8C3',
   spr: '51E3F8E9',
   otb: 50
  },
  1020: {
   dat: '5236F129',
   spr: '5236F14F',
   otb: 51
  },
  1021: {
   dat: '526A5068',
   spr: '526A5090',
   otb: 52
  },
  1030: {
   dat: '52A59036',
   spr: '52A5905F',
   otb: 53
  },
  1031: {
   dat: '52AED581',
   spr: '52AED5A7',
   otb: 54
  },
  1032: {
   dat: '52D8D0A9',
   spr: '52D8D0CE',
   otb: 0
  },
  1034: {
   dat: '52E74AB5',
   spr: '52E74ADA',
   otb: 0
  },
  1035: {
   dat: '52FDFC2C',
   spr: '52FDFC54',
   otb: 55
  },
  1036: {
   dat: '53159C7E',
   spr: '53159CA9',
   otb: 0
  },
  1037: {
   dat: '531EA82E',
   spr: '531EA856',
   otb: 0
  },
  1038: {
   dat: '5333C199',
   spr: '5333C1C3',
   otb: 0
  },
  1039: {
   dat: '535A50AD',
   spr: '535A50D5',
   otb: 0
  },
  1040: {
   dat: '5379984D',
   spr: '53799876',
   otb: 0
  },
  1041: {
   dat: '5383504E',
   spr: '53835077',
   otb: 0
  },
  1050: {
   dat: '53B6460E',
   spr: '53B64639',
   otb: 0
  },
  1051: {
   dat: '53C8CC17',
   spr: '53C8CC3F',
   otb: 0
  }
};

_findBy = function(type, value) {
  value = value.toUpperCase();
  for(var version in clients) {
    var client = clients[version];
    if(Array.isArray(client)) {
      for(var rev in client) {
        if(client[rev][type] == value) {
          return true;
        }
      }
    } else {
      if(client[type] == value) {
        return true;
      }
    }
  }

  return false;
};

module.exports = {

  isValidSprSignature: function(value) {
    return _findBy('spr', value);
  },

  isValidDatSignature: function(value) {
    return _findBy('dat', value);
  },

};
