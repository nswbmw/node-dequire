module.exports = function dequire(obj) {
  try {
    if (arguments.length > 1) {
      return dequire.call(obj, arguments);
    }
    for (var i in obj) {
      if (+i == i) {// array
        if (obj[i].indexOf('=') === -1) {
          var _arr = obj[i].split(/\//);
          eval(_arr[_arr.length - 1] + '= require("' + obj[i].trim() + '")');
        } else {
          var _arr = obj[i].split('=');
          eval(_arr.slice(0, _arr.length - 1).join('=') + '= require("' + _arr[_arr.length - 1].trim() + '")');
        }
      } else {// object
        eval(i + '= require("' + obj[i] + '")');
      }
    }
   } catch(e) {
    console.log(e);
  }
}