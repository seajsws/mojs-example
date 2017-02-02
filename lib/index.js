'use strict';

var _moJs = require('mo-js');

var _moJs2 = _interopRequireDefault(_moJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var identity = function identity(s) {
  return s;
};


console.log(identity('Initialized'));
console.log(_moJs2.default);

// var shape = new mojs.Shape({
//       shape:        'circle',
//       isShowStart:  true
//     });

var burst = new _moJs2.default.Burst();