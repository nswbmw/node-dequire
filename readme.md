## node-dequire

**dequire** is a useful tool for debug environment. Avoiding writing tons of **require()** like:

    var a = require('a');
    var b = require('b');
    var c = require('c');
    var d = require('d');
    var e = require('e');
    var f = require('f');
    var g = require('g');
    var h = require('h');
    var i = require('i');
    ......
    
with dequire, you can write like:

    require('dequire)('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i');


### Install

    npm i dequire --save

### Usage

    require('..')('http', 'file = fs', './package');

or

    require('..')(['http', 'file = fs', './package']);

or

    require('..')({
      'http' : 'http',
      'file' : 'fs',
      'package' : './package'
    });
    
or

    require('..')({
      http : 'http',
      file : 'fs',
      package : './package'
    });

equal to

    var http = require('http');
    var file = require('fs');
    var package = require('./pacakage');


you can find more details in **samples**.

**NB:** Always omit extension(.js or .node or .json). 

### License

MIT